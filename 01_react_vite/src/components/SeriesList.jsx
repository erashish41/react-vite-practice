import style from './NetflixSeries.module.css';
import styled from 'styled-components';

export const SeriesList = ({data}) => {
    // console.log(props);
    const { img_url, title, description, cast, rating, genre, watch_url } = data;     // means we have destructure here

    // // Code with Styled Component
    // // const btn_style = {
    //    const ButtonName = styled.button({      // button is TagName like (h1, p, a, li, ul, button, img, etc)
    //     padding: "1.2rem 2.4rem",
    //     border: "none",
    //     fontSize: "1.6rem",
    //     backgroundColor: `${rating >= 8.3 ? "#7dcea0" : "#f7dc6f"}`,
    //     color: "var(--bg-color)",
    //     fontWeight: "bold",
    //     cursor: "ponter",
    //     borderRadius: "20px"
    //   })
    
  

  // // Code with Template Literal
   // const btn_style = {
   // button is TagName like (h1, p, a, li, ul, button, img, etc) 
   // when we use templete literals , (commas) dont work
      const ButtonName = styled.button`      
        padding: 1.2rem 2.4rem;
        border: none;
        font-size: 1.6rem;
        background-color: ${(props) =>
             props.rating >= 8.3 ? "#7dcea0" : "#f7dc6f"};
        color: var(--bg-color);
        font-weight: bold;
        cursor: pointer;
        border-radius: 20px;
      `;

    const Rating = styled.h3`
      font-size: 1.6rem;
      color: #7dcea0;
      text-transform: capitalize;  
    `;


  // In Styled Components, we can pass a function within the template literal dynamicaly
  //  set Css properties based on props or state


    const ratingClass = rating >= 8.3 ? style.super_hit : style.average;

    return (                                 
        <li className= {style.card} >             {/* // You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array: */}
          <div>
            <img src= {img_url} alt={title}/>
          </div>
          {/* - things which are not accessable (like hyphens - ) by . notation we have to use bracket notation [ ] */}
          {/* <div className={style["card-content"]}>    */}

            {/* This is done with the help of CSS Tailwind */}
          <div className= "flex flex-col gap-6 px-6 py-6  ">

            <h2 >Original Title: {title}</h2>
            {/* h3 is replace by Rating */}
            <Rating>Rating: <span className = {`${style.rating} ${ratingClass}`} > {rating}</span></Rating>
            <p>Cast: {cast.join(", ")} </p>
            <p>Genres: {genre.join(", ")}</p>
            <p className= "text-3xl font-bold underline text-cyan-300	">Content Type: {description} </p>
            <a href= {watch_url} target="_blank">
              {/* this button is for normaly used to fetch the data*/}  
              {/* <button style={btn_style}>Watch now</button> */}

              {/* this buttonName is for styled object*/}
              {/* <ButtonName>Watch now</ButtonName>           */}

              {/* this buttonName is for template literal*/}
              <ButtonName rating = {rating}>Watch now</ButtonName>           
            </a>
         </div>
       </li>
     )
}