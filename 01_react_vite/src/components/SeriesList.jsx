
export const SeriesList = ({data}) => {
    // console.log(props);
    const { id, img_url, title, description, cast, rating, genre, watch_url } = data;     // means we have destructure here


    const btn_style = {
      padding: "1.2rem 2.4rem",
      border: "none",
      fontSize: "1.6rem",
      backgroundColor: "var( --bnt-hover-bg-color)",
      color: "var(--bg-color)",
    }

    return (                                 
        <li className="card" >             {/* // You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array: */}
         <div>
           <img src= {img_url} alt={title}  width={"40px"}/>
         </div>
         <div className="card-content">
           <h2 >Original Title: {title}</h2>
           <h3>Cast: {cast} </h3>
           <h3>Rating: {rating} </h3>
           <h3>Genres: {genre}</h3>
           <h4>Content Type: {description} </h4>
           <a href= {watch_url} target="_blank">
           <button style={btn_style}>Watch now</button>
           </a>
         </div>
       </li>
     )
}