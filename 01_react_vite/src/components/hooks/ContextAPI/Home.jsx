// 1. without custom hook


// import { useContext } from "react"
// import { BioContext } from "./Index"

// export const Home = () => {

//     // we have to pass the main context in useCOntext
//     // with the help of useContext we get the data
//     const {myName, myAge} = useContext(BioContext);

//     return (
//         <div>
//             <h1>Hello to Context API from Home. </h1>
//             <p>My name is {myName} and age is {myAge} </p>
//         </div>
//     );};



// 2. with custom hook
import { useBioContext } from "./Index";

export const Home = () => {

    // instead of writing useContext(BioContext) we can write only our custom hook (useBioContext())
    const {myName, myAge} = useBioContext();

    return (
        <div>
            <h1>Hello to Context API from Home. </h1>
            <p>My name is {myName} and age is {myAge} </p>
        </div>
    );};
