import { useEffect, useState } from "react"

export const EffectChallenge = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");


    // this useEffect is used to show data in title of file/document
    useEffect(() => {
        document.title = `count ${count}`
    }, [count])

    // this useEffect is used to show data in console.log as output
    useEffect(() => {
        console.log(name);
        
    }, [name])



    return (
        <div className="container effect-contianer">
            <h1>useEffect Challenge</h1>
            <p>Count <span> {count} </span></p>

            <button onClick={() => setCount(count + 1)}>Increment</button>

            <p> Name : <span> {name} </span></p>
            <input type="text" autoComplete="off" value={name} 
                onChange={(e) => setName(e.target.value)}>
            </input>
        </div>
    )
}