import { useState } from "react";

export const State = () => {
   const [count, setCount] = useState(0);
    console.log("Parent component is rendered");


   const handleButtonClick = () => {
    setCount(() => count + 1)
   }
    
    return(
        <>
            <div className="main-div">
                <h2>{count}</h2>
                <button onClick={handleButtonClick}>Increment</button>
{/* This means if anything is change in  Parent component it will also change in child component */}
            </div>
            <ChildComponent count = {count}/>
        </>
    );
};

function ChildComponent ({count}) {
    console.log("child component is rendered");
    return (
    <div>
        <h2>Child Component - {count}</h2>
    </div>
    );
};

// in this file means that if parent component is changed the child component will automaticaly change