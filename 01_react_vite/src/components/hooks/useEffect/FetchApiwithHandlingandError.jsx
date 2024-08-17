import { useEffect, useState } from "react"
import "./Pokemon.css"

export const FetchApiwithHandlingandError = () => {

    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then((res) => res.json())
        .then((data) => {
            setPokemon(data);
            setLoading(false)})
        .catch((error) => {
            setError(error)
            console.log(error)})

    }

    useEffect(() => {   
        fetchPokemon();
    },[])

    console.log(pokemon);
    

    if(loading) 
        return(
            <div>
                <h1>loading...</h1>
            </div>
        )

    if(error)
        return(
    <div>
        <h1>Error: {error.message}</h1>
    </div>
    )

    return (
        <section className="container">
            <header>
                <h1>Catch the Pokemon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                    <figure>
                        <img 
                            src={pokemon.sprites.other.dream_world.front_default}
                            alt={pokemon.name}
                            className="pokemon-image" 
                         />
                    </figure>
                    <h1>{pokemon.name}</h1>
                    <div className="grid-three-cols">
                        <p className="pokemon-info">
                            Height: <span> {pokemon.height} </span>
                        </p>
                        <p className="pokemon-info">
                            Weight: <span> {pokemon.weight}</span>
                        </p>
                        <p className="pokemon-info">
                            speed: <span>{pokemon.stats[5].base_stat}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    )
}