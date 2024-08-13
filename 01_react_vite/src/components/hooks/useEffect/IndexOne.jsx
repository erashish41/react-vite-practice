import { useEffect, useState } from "react"

export const IndexOne = () => {
    const [count, setCount] = useState(0);

    useEffect(() =>{
        console.log(`count: ${count}`);
        
    }, [count])

    return(
        <div className="container effect-container">
            <h1>Hello, useEffect Hook !</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}