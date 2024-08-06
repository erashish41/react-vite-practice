// Lifting State Up: in this pattern we move the state from child components to a common parent 
//     component so that multiple child components can share and synchronize this state.

// a. Parent Component: Holds the state inputValue and the state handler setInputValue
// b. Input Component: Receives inputValue and setInputValue as props. It updates the state
//       via setInputValue when the input changes
// c. Display Component: Receives inputValue as a prop and displays the current input value.

import '../EV.css'
import { useState } from "react"

export const LiftingState = () => {
    const [inputValue, setInputValue] = useState("");
    return(
        <>
        {/* passing values in InputComponent and DisplayComponent is called props */}
            <InputComponent inputValue= {inputValue} setInputValue= {setInputValue} />
            <DisplayComponent inputValue= {inputValue} />

        </>
    )
}

// {inputValue} is destructured here and inputValue is get in InputComponent
const InputComponent = ({inputValue, setInputValue}) => {


    return (
        <>
            <input type='text' placeholder='enter your name' value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)}></input>
        </>
    )
}

const DisplayComponent = ({inputValue}) => {
    return (
        <p>The current input value is:{inputValue} </p>
    )
}