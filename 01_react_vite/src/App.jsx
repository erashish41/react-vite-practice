//Dynamic value: here we made variables function inside JS with the help of { } curely braces in JSX

import NetflixSeries, { Footer, Header} from "./components/NetflixSeries"

export const App = () => {
    return (
      <>
        <Header />
        <NetflixSeries />
        <NetflixSeries />
        <NetflixSeries />
        <NetflixSeries />
        <Footer />
        
      </>
    )
}

