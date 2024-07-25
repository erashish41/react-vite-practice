{/* - NetflixSeries is a Component not a Function
    - key and currElem are props which are passed in it
    - currElem itself represents each element in the seriesData array, so using currElem[0] 
    - is incorrect.   at parameter: current element and index will come
    - SeriesList is child component which is called by NetflixSeries as parent component
    - key and data are props(property)
    - key and prop allows the SeriesList component to receive and use the series data (currElem).*/}


import seriesData from '../api/seriesData.json'

import { SeriesList } from './SeriesList';

  const NetflixSeries = () => {
    return (
      <ul>
         {seriesData.map((currElem) => {
          return  <SeriesList key={currElem.imdbid} data={currElem} />
         })}    
      </ul>

      
    )
  }
export default NetflixSeries;

