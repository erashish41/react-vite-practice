import { useCallback, useState } from "react"

// Button component receives two props {onClick, children}
const Button = ({onClick, children}) =>
     {
    // console.log(`Rendering button: ${children}`);
    
    return (
        <button className= {`text-black mb-4 py-2 px-5
            ${children === "Increment" ? "bg-green-400" : "bg-red-400"}`} 
            onClick={onClick}>
            {children}
        </button>
    )
}

export default function UseCallback() {

    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("increment inside");
        setCount((prevCount) => prevCount + 1);   
    }, [])

    const decrement = useCallback(() => {
        setCount((prevCount) => prevCount - 1);   
    }, [])   

    return(
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-end 
            items-center text-white">
            <h1 className="mb-4 bg-white"> Count: {count} </h1>
            <Button onClick = {increment}>Increment</Button>
            <Button onClick = {decrement}>Decrement</Button>
            {/* onClick is props not event and increment/decrement is function not a value */}
        </div>
    );
};