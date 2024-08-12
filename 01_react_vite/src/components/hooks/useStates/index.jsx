import { useState } from "react"

export const Index = () => {

    const [count, setCount] = useState(0)
    return(
        <div className="contianer state-container" style={{textAlign: "center"}}>
            <h1>useState Hook</h1>
            <br />
            <p>{count}</p>
            <button className="state-button" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="state-button" onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}