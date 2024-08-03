import { useState } from "react";

export const State = () => {
   const [count, setCount] = useState(5);

    const handleButtonClick = () => {
        setCount(() => count + 1)
    }
    return(
        <>
            <section className="main-div">
                <h2>{count}</h2>
                <button onClick={handleButtonClick}>Increment</button>
            </section>
        </>
    )
}