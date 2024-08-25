//Dynamic value: here we made variables function inside JS with the help of { } curely braces in JSX

import { EventHandling } from "./components/EventHandling";
import { EventPropagation } from "./components/EventPropagation";
import { EventProps } from "./components/EventProps";
import { Extra } from "./components/Extra";
import { About } from "./components/hooks/ContextAPI/About";
import { Home } from "./components/hooks/ContextAPI/Home";
import { BioProvider } from "./components/hooks/ContextAPI/Index";
import { DerivedState } from "./components/hooks/DerivedState";
import { DerivedState1 } from "./components/hooks/DerivedState1";
import { LiftingState } from "./components/hooks/LiftingState";
import { ReactMemo } from "./components/hooks/Memo/ReactMemo";
import { MemoParentComponent } from "./components/hooks/Memo/UseMemo";
import ShortCircuit from "./components/hooks/ShortCircuit";
import { State } from "./components/hooks/State";
import { AsyncAwaitTryCatch } from "./components/hooks/useEffect/AsyncAwaitTryCatch";
import { CleanUpuseEffect } from "./components/hooks/useEffect/CleanUpuseEffect";
import { DateTime } from "./components/hooks/useEffect/DateTime";
import { EffectChallenge } from "./components/hooks/useEffect/EffectChallenge";
import { FetchApiwithFunction } from "./components/hooks/useEffect/FetchApiwithFunction";
import { FetchApiwithHandlingandError } from "./components/hooks/useEffect/FetchApiwithHandlingandError";
import { HowNotToFetchApi } from "./components/hooks/useEffect/HowNotToFetchApi";
import { IndexOne } from "./components/hooks/useEffect/IndexOne";
import { IndexUseId } from "./components/hooks/useID/Index";
import { IndexReducer } from "./components/hooks/useReducer/IndexReducer";
import { ForwardRef } from "./components/hooks/useRef/ForwardRef";
import { IndexuseRef } from "./components/hooks/useRef/IndexuseRef";
import { Index } from "./components/hooks/useStates";
import { Challenge } from "./components/hooks/useStates/Challenge";
import { ContactForm } from "./components/hooks/useStates/ContactForm";
import { LoginPage } from "./components/hooks/useStates/LoginPage";
import { RegistrationReact } from "./components/hooks/useStates/RegistrationReact";
import NetflixSeries from "./components/NetflixSeries";
import "./components/NetflixSeries.module.css";
import { ParentComponent } from "./components/PropDrilling";
 

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
        {/* <ContactForm /> */}
        {/* <IndexOne /> */}
        {/* <DateTime /> */}
        {/* <EffectChallenge /> */}
        {/* <CleanUpuseEffect /> */}
        {/* <HowNotToFetchApi /> */}
        {/* <FetchApiwithFunction /> */}
        {/* < FetchApiwithHandlingandError /> */}
        {/* <AsyncAwaitTryCatch /> */}
        {/* <IndexuseRef /> */}
        {/* <ForwardRef /> */}
        {/* <IndexUseId /> */}
        {/* <ParentComponent /> */}
        {/* <BioProvider>
          <Home />
          <About />
        </BioProvider> */}
        {/* <IndexReducer /> */}
        <ReactMemo />
        {/* <MemoParentComponent /> */}
      </section>
    )
}