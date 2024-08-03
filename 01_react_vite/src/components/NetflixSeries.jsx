{/* - NetflixSeries is a Component not a Function.
    - key and data are props(property) which are passed from parent to child component.
    - currElem itself represents each element in the seriesData array, so using currElem[0] 
    - is incorrect.   at parameter: current element and index will come
    - SeriesList is child component which is called by NetflixSeries as parent component
    - key and prop allows the SeriesList component to receive and use the series data (currElem).*/}


import seriesData from '../api/seriesData.json'
import { SeriesList } from './SeriesList'


  const NetflixSeries = () => {
    return (
      <ul className='grid grid-three--cols'>
        {
          seriesData.map((currElem) => {
            return <SeriesList key={currElem.id} data={currElem}/>
          })
        }
      </ul>

      
    )
  }
export default NetflixSeries;

