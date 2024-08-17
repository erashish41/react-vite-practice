//1. this HowNotToFetchApi will fetch the data but the network request is more than 300 increase with time 
//2. if we have to set the problem of it we have to add useEffect hook to resolve the network request issue

import { useEffect, useState } from "react"

// // 1. without useEffect (not recommended)
// import {useState } from "react"
// export const HowNotToFetchApi =() => {

//     const[apiData, setApiData] = useState([]);
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then((res) => res.json())
//             .then((data) => {setApiData(data)})
//             .catch((error) => console.log(error))

//     return(
//         <div className="container effect-container">
//             <ul>data : 
//                 {
//                      apiData.map((currData) => {
//                          return <li key={currData.id}> {currData.title}</li>
//                     })
//                 } 
//             </ul>
//         </div>
//     )
// }


// 2. with useEffect (recommended)
export const HowNotToFetchApi = () => {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setApiData(data))
        .catch((error) => console.log(error))

    },[])

    return(
        <div className="container effect-container">
            <ul> data:
                {
                    apiData.map((currElm) => {
                        return <li key={currElm.id}>{currElm.title}</li>
                    })
                }
             </ul>
        </div>
    )
}
