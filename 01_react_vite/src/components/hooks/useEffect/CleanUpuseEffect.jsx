import './index.css'
import { useEffect, useState } from "react"

export const CleanUpuseEffect = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => (prev + 1))
        }, 1000);

        return () => clearInterval(timer)
    }, [])

    return (
        <div  className="container">
            <div className="counter">
                <p>My daily spets count</p>

                <div className="odometer" id="odometer"> 
                    {count} 
                </div>
                <h3 className="title">Footstep
                    <br/>Realtime counter
                </h3>
            </div>
        </div>
    )
}