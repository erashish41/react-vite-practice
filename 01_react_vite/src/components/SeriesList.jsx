import style from './NetflixSeries.module.css'

export const SeriesList = ({data}) => {
    // console.log(props);
    const { img_url, title, description, cast, rating, genre, watch_url } = data;     // means we have destructure here


    const btn_style = {
      padding: "1.2rem 2.4rem",
      border: "none",
      fontSize: "1.6rem",
      backgroundColor: `${rating >= 8.3 ? "#7dcea0" : "#f7dc6f"}`,
      color: "var(--bg-color)",
      fontWeight: "bold",
      cursor: "ponter",
    };

    const ratingClass = rating >= 8.3 ? style.super_hit : style.average;

    return (                                 
        <li className= {style.card} >             {/* // You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array: */}
         <div>
           <img src= {img_url} alt={title}/>
         </div>
         <div className={style["card-content"]}>
           <h2 >Original Title: {title}</h2>
          <h3>Rating: <span  className = {`${style.rating} ${ratingClass}`} >{rating}</span></h3>
          <p>Cast: {cast} </p>
           <p>Genres: {genre}</p>
           <p>Content Type: {description} </p>
           <a href= {watch_url} target="_blank">
           <button style={btn_style}>Watch now</button>
           </a>
         </div>
       </li>
     )
}