import style from './NetflixSeries.module.css';
import styled from 'styled-components';

export const SeriesList = ({data}) => {
    // console.log(props);
    const { img_url, title, description, cast, rating, genre, watch_url } = data;     // means we have destructure here


    // const btn_style = {
      const ButtonName = styled.button({
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.3 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--bg-color)",
        fontWeight: "bold",
        cursor: "ponter",
        borderRadius: "20px"
      })
    
  

    const ratingClass = rating >= 8.3 ? style.super_hit : style.average;

    return (                                 
        <li className= {style.card} >             {/* // You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array: */}
         <div>
           <img src= {img_url} alt={title}/>
         </div>
         <div className={style["card-content"]}>   {/* - things which are not accessable (like hyphens - ) by . notation we have to use bracket notation [ ] */}
            <h2 >Original Title: {title}</h2>
            <h3>Rating: <span className = {`${style.rating} ${ratingClass}`} > {rating}</span></h3>
            <p>Cast: {cast.join(", ")} </p>
            <p>Genres: {genre.join(", ")}</p>
            <p>Content Type: {description} </p>
            <a href= {watch_url} target="_blank">
              {/* <button style={btn_style}>Watch now</button> */}
              <ButtonName>Watch now</ButtonName>
            </a>
         </div>
       </li>
     )
}