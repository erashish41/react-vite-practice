{/* - NetflixSeries is a Component not a Function
    - key and currElem are props which are passed in it
    - currElem itself represents each element in the seriesData array, so using currElem[0] 
    - is incorrect.   at parameter: current element and index will come*/}
import seriesData from '../api/seriesData.json'

import { SeriesList } from './SeriesList';

  const NetflixSeries = () => {
    return (
      <ul>
         {seriesData.map((currElem) => {
          return  <SeriesList key={currElem.imdbid} currElem={currElem} />
         })}
      </ul>

      
    )
  }
export default NetflixSeries;

