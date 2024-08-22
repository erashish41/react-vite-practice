// 1. without Custom hook


// import { createContext } from "react";

// // BioContext don't return normal variable it returns a Component
// // BioContext is the main context in whole application
// export const BioContext = createContext();

// // {children} means it will get all the children which are combined in BioProvider
// export const BioProvider = ({children}) => {
//     const myName = "Ashish";
//     const myAge = 31;

//     // by passing children means all the children can access the data from BioProvider 
//     return (
//         <BioContext.Provider value={{myName: myName, myAge: myAge}}>
//             {children}  
//         </BioContext.Provider>
//     )
// }



// 2. with Custom hook
import { createContext, useContext } from "react";

// BioContext don't return normal variable it returns a Component
// BioContext is the main context in whole application
export const BioContext = createContext();

// {children} means it will get all the children which are combined in BioProvider
export const BioProvider = ({children}) => {
    const myName = "Ashish";
    const myAge = 31;

    // by passing children means all the children can access the data from BioProvider 
    return (
        <BioContext.Provider value={{myName: myName, myAge: myAge}}>
            {children}  
        </BioContext.Provider>
    )
}

// custom hook
export const useBioContext = () => {
    const context = useContext(BioContext);

    if(context === undefined){
        throw new Error("Component should be wrap into BioProvider");
    }
    return context;
};