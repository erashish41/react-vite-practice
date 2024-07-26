//Dynamic value: here we made variables function inside JS with the help of { } curely braces in JSX

import NetflixSeries from "./components/NetflixSeries"
import "./components/NetflixSeries.css"

export const App = () => {
    return (
      <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
        <NetflixSeries />
      </section>
    )
}

