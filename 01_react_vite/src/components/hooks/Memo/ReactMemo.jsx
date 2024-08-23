import { useState } from "react"
import MemoCount  from "./MemoCount";

export const ReactMemo = () => {

    const [count, setCount] = useState(0);

    return(
        <>
            <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-end 
                items-center">
                <h1 className="bg-cyan-500"> {count} </h1>
                <button className="btn bg-cyan-500 py-1 px-3" 
                    onClick={() => setCount((count) => count + 1)}>Increment</button>
            </div>
            <MemoCount />
        </>
    )
}