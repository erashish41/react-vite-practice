export const App = () => {
  return (
      <>
        <NetflixSeries />
        <NetflixSeries />
        <NetflixSeries />
        <NetflixSeries />
        <NetflixSeries />
      </>
  )
}

// NetflixSeries is a Component not a Function
const NetflixSeries = () => {
  return (
    <div> 
    <div>
          <img src="Love_Alarm.jpg"/>
        </div>
        <div>
          <h2>Name: Love Alarm</h2>
          <h3>Seasons: 2</h3>
          <h3>Rating: 6.6</h3>
          <p>
           Summary: Love Alarm is the first Korean drama series confirmed for pick-up by Netflix. The first 
           season of the series was released on Netflix on August 22, 2019. It was ranked as one of Netflix's 
           top releases and was renewed for a second season in October 2019; season 2 was released on March 12,
            2021. In 2021, the series managed to rank as the 6th most watched K-dramas worldwide in the platform. 
            In 2022, it was the ninth most searched Korean drama worldwide.
           </p>
        </div>
        </div>
  )
}