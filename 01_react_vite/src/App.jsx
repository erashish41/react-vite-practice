//Dynamic value: here we made variables function inside JS with the help of { } curely braces in JSX

import { EventHandling } from "./components/EventHandling";
import { EventPropagation } from "./components/EventPropagation";
import { EventProps } from "./components/EventProps";
import { Extra } from "./components/Extra";
import { DerivedState } from "./components/hooks/DerivedState";
import { DerivedState1 } from "./components/hooks/DerivedState1";
import { LiftingState } from "./components/hooks/LiftingState";
import ShortCircuit from "./components/hooks/ShortCircuit";
import { State } from "./components/hooks/State";
import { Index } from "./components/hooks/useStates";
import { Challenge } from "./components/hooks/useStates/Challenge";
import { ContactForm } from "./components/hooks/useStates/ContactForm";
import { LoginPage } from "./components/hooks/useStates/LoginPage";
import { RegistrationReact } from "./components/hooks/useStates/RegistrationReact";
import NetflixSeries from "./components/NetflixSeries";
import "./components/NetflixSeries.module.css";
 

export const App = () => {
    return (
      <section className="container">
        {/* <h1 className="card-heading">List of Best Netflix Series</h1> */}
        {/* <NetflixSeries /> */}
        {/* <EventHandling /> */}
        {/* <EventProps /> */}
        {/* < EventPropagation /> */}
        {/* <State /> */}
        {/* <DerivedState /> */}
        {/* <DerivedState1 /> */}
        {/* <LiftingState /> */}
        {/* <ShortCircuit /> */}
        {/* <Index /> */}
        {/* <Challenge /> */}
        {/* <RegistrationReact /> */}
        {/* <Extra /> */}
        {/* <LoginPage /> */}
        <ContactForm />
      </section>
    )
}