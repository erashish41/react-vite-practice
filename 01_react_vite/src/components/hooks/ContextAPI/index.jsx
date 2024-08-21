import { createContext } from "react";

// BioContext is the main context in whole application
export const BioContext = createContext();

// {children} means it will get all the children which are combined in BioProvider
export const BioProvider = ({children}) => {
    const myName = "Ashish";
    const myAge = 31;

    return (
        <BioContext.Provider value={{myName: myName, myAge: myAge}}>
            {children}  
        </BioContext.Provider>
    )
}
// by passing children here means all the children can access the data from BioProvider 
