//Dynamic value: here we made variables function inside JS with the help of { } curely braces in JSX
export const App = () => {
 
  return (
      <>``
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

  const naam = "Love Alarm";
  const season = "2";
  const rating = "6.6";
  const summary = "Love Alarm is the first Korean drama series confirmed for pick-up by Netflix";

  const returnGenre = () => {
    const genre = "Romantic & Commedy";
    return genre;
  }
  
  return (
    <div> 
    <div>
          <img src="Love_Alarm.jpg"/>
        </div>
        <div>
          <h2>Naam: {naam} </h2>
          <h3>Seasons: {season} </h3>
          <h3>Rating: {3 + 3.2} </h3>
          <p>Summary: {summary}</p>
          <p>Genre: {returnGenre()} </p>
        </div>
        </div>
  )
}