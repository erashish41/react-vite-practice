// Drived State in React
// how to find the average and length of the data given in array

import { useState } from "react"

export const DerivedState1 = () => {
    const [users, setUsers] = useState([
        {naam: "Alice", age: 25},
        {naam: "Bob", age: 29},
        {naam: "Charlie", age: 32},
        {naam: "Angles", age: 38},
    ])

    // Derived state: Calculate the number of users
    // usersCount is derived state

    const usersCount = users.length;

    // Derived state: Calculate the average age of the users
    const averageAge = users.reduce((acc, currEl) => {
        return acc + currEl.age;
    }, 0) / usersCount
    

    return(
        <>
            <div>
                <p>Total Users: {usersCount}</p>
                <p>Average Age: {averageAge} </p> 
            </div>
        </>
    )
}