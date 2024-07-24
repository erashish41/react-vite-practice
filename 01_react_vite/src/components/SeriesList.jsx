export const SeriesList = (props) => {
    console.log(props);

    return (                                 
        <li key={props.currElem.imdbid}>             {/* // You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array: */}
         <div>
           <img src= {props.currElem.imageurl}/>
         </div>
         <div>
           <h2>Original Title: {props.currElem.title}</h2>
           <h3>Content Type: {props.currElem.type} </h3>
           <h3>release_date: {props.currElem.released} </h3>
           <h3>rating: {props.currElem.imdbrating} </h3>
           <h3>genres: {props.currElem.genre}</h3>
           <a href="https://www.google.com/">
           <button>Watch now</button>
           </a>
         </div>
       </li>
     )
}