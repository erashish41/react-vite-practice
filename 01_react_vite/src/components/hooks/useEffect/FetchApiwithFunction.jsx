// Fetch api with Function and useEffect

import { useEffect, useState } from "react"

export const FetchApiwithFunction =() => {

    const[pokemon, setPokemon] = useState(null)

    const fetchPokemon =() => {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then((res) => res.json())
        .then((data) => setPokemon(data))
        .catch((error) => console.log(error)
        )
    }

    useEffect(() => {
        fetchPokemon()
    },[])

    console.log(pokemon);
    

    if(!pokemon) 
        return 
            <div> 
                <h1>Loading...</h1>
            </div>

    // if(pokemon) {
        return (
            <div className="container">
                <header>
                    <h1>Lets Catch Pokemon</h1>
                </header>
                <ul className="card-demo">
                    <li className="pokemon-card"></li>
                    <figure>
                        <img 
                            src={pokemon.sprites.other.dream_world.front_default}
                            alt={pokemon.name}
                        />
                    </figure>
                    <h1>{pokemon.name}</h1>
                </ul>
            </div>
        )
    }
// }