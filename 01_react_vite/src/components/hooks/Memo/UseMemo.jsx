// In this file we want to render only MemoParentComponent(Parent component) not child P (ExpensiveComponent)

import { useMemo, useState } from "react";


const ExpensiveComponent = () => {
    
    const sum = () => {
        console.log("calculating sum ...");
        let i = 0;
        for(i =0; i<= 10000000; i++){
            i = i + 1;
        }
        return i;
    };
    //  with the help of useMemo() will store the value from cache value and display it 
    const total = useMemo(() => sum(),[])
    return <p> sum: {total} </p>
};


export const MemoParentComponent = () => {

    const [count, setCount] = useState(0)

    return (
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col
         justify-center items-center bg-black text-white">
            <ExpensiveComponent />
            <button className="py-3 px-6 bg-cyan-400 rounder-sm"
                onClick={() => setCount(prev => prev + 1)}
            >
                Re-render Parent
            </button>
            <p>Parent re-render: {count} </p>
        </div>
    )
}