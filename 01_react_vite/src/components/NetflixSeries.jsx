
// NetflixSeries is a Component not a Function
  const NetflixSeries = () => {
    const naam = "Love Alarm";
    const season = 2;
    const language = "k - drama";
    const rating = 6.6;
    const returnGenre = () => {
      const genre = "Romantic & Commedy";
      return genre;
    }
    const age = 28;
    const personAge = () => {
      if(age >= 18) return "Watch now";
      return "Not Available"
    }
    return (
      <div>
        <div>
          <img src="Love_Alarm.jpg"/>
        </div>
        <div>
          <h2>Naam: {naam}</h2>
          <h3>Seasons: {season} </h3>
          <h3>Language: {language} </h3>
          <h3>Rating: {3 + 3.2} </h3>
          <h3>Genre: {returnGenre() }</h3>
          <button>{personAge() }</button>
        </div>
      </div>
    )
  }
export default NetflixSeries;


export const Header = () => {
    return <p> copyright @NetflixSeries</p>
}

export const Footer = () => {
    return <p> copyright @NetflixSeries</p>
}