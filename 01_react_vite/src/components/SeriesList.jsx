export const SeriesList = ({data}) => {
    // console.log(props);
    const { imdbid, imageurl, title, type, released, imdbrating, genre } = data;     // means we have destructure here

    return (                                 
        <li >             {/* // You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array: */}
         <div>
           <img src= {imageurl}/>
         </div>
         <div>
           <h2>Original Title: {title}</h2>
           <h3>Content Type: {type} </h3>
           <h3>release_date: {released} </h3>
           <h3>rating: {imdbrating} </h3>
           <h3>genres: {genre}</h3>
           <a href="https://www.google.com/">
           <button>Watch now</button>
           </a>
         </div>
       </li>
     )
}