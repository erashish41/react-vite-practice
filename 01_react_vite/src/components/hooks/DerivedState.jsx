// example to find the data from array with useStates

import { useState } from "react"
import "../EV.css"


export const DerivedState = () => {

    const [users, setUsers] = useState([
        {naam: "Alice", age: 25},
        {naam: "Bob", age: 29},
        {naam: "Charlie", age: 32},
        {naam: "Angles", age: 38},
    ])
    return (
        <>
            <div className="main-div">
                <h1>Users Info</h1>
            </div>
            <ul>
                {users.map((currElem, index) => {
                    return (
                        <>
                            <li key={index}>
                                {currElem.naam} - {currElem.age} years old 
                            </li>
                        </>
                    )
                })}
            </ul>
        </>
    )
}