// by memo() hook we can only stop re-render the 

import { useMemo, useState } from "react"
import {MemoCount}  from "./MemoCount";

export const ReactMemo = () => {

    const [count, setCount] = useState(0);

// the memoizied value of useMemo() is passed to myBioData
    const myBioData = useMemo(() => {
        return {
            userName : "Ashish",
            userAge : 30,
        }
    }, [])
    return(
        <>
            <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-end 
                items-center">
                <h1 className="bg-cyan-500"> {count} </h1>
                <button className="btn bg-cyan-500 py-1 px-3" 
                    onClick={() => setCount((count) => count + 1)}>Increment</button>
            </div>
            <MemoCount  bioData = {myBioData} />
        </>
    )
}