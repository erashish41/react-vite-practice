import { useState, useEffect } from "react"

export const DateTime = () =>  {

    const [date, setDate] = useState("");

    useEffect(() => {
        setInterval(() => {
            const updateDate = new Date();
        // setDate(updateDate.toLocaleDateString());         // for date
             setDate(updateDate.toLocaleTimeString())       // for time
        }, 1000);
    }, []);

    return (
        <>
            <div className="container">
                <h1> Date : {date}</h1>
                {/* <h1> Time : {time}</h1> */}
            </div>
        </>
    )
}