// 1. without Custom Hook


// import { useContext } from "react"
// import { BioContext } from "./Index"

// export const About = () => {

//     // we have to pass the main context in useContext
//     const {myName, myAge} = useContext(BioContext);

//     return(
//         <section className= {`p-4 h-lvh font-display tracking-winder flex flex-col 
//         justify-center items-center bg-gray-900 text-white`}>
            
//                 <h1>Hello to Context API from About.</h1>
//                 <p>My name is {myName} and age is {myAge} </p>
        
//         </section>
//     )
// }




// 2. with Custom Hook 
import { useBioContext } from "./Index";

export const About = () => {
// instead of writing useContext(BioContext) we can write only our custom hook (useBioContext())
    const {myName, myAge} = useBioContext();
    return (
        <div>
            <h1>Hello to Context API from About. </h1>
            <p>My name is {myName} and age is {myAge} </p>
        </div>
    )
}
