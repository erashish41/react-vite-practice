// NetflixSeries is a Component not a Function

import seriesData from '../api/seriesData.json'

  const NetflixSeries = () => {
    return (
      <div>
        <div>
          <img src= {Object.keys(imageurl)[0]}/>
        </div>
        <div>
          <h2>Original Title: {Object.keys(title)[0]}</h2>
          <h3>Content Type: {Object.keys(type)[0]} </h3>
          <h3>release_date: {Object.keys(released)[0]} </h3>
          <h3>rating: {Object.keys(imdbrating)[0]} </h3>
          <h3>genres: {Object.keys(genres)[0]}</h3>
          <a href="">
          <button>Watch now</button>
          </a>
        </div>
      </div>
    )
  }
export default NetflixSeries;

