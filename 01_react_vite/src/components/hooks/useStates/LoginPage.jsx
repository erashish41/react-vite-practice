// 2 ways to get data and post to backend

import { useState } from "react"

export const LoginPage = () => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const loginData = {
            username, 
            password,
        };
        console.log(loginData);
        
    }

    return (
        <div className="container">
            <div className="card">
                <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" required autoComplete="off"
                    value={username} onChange={(event) => {setUserName(event.target.value)}}>
                </input>

                <br/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" required autoComplete="off"
                    value={password} onChange={(event) => {setPassword(event.target.value)}}>
                </input>

                <button type="submit">submit</button>
            </form>
            </div>
        </div>
    )
}


/*  Another way to get the data 

import { useState } from "react"

export const LoginPage = () => {

    const [info, setInfo] = useState({
        username: "",
        password: "",
    })


    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setInfo((prev) => ({...prev, [name]: value}))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(info);

    }

    return (
        <div className="container">
            
            <form onSubmit={handleFormSubmit}>
                <div className="card">
                <h1>Login Form</h1>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" required autoComplete="off"
                    value={info.username} onChange={handleInputChange}>
                </input>

                <br/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" required autoComplete="off"
                    value={info.password} onChange={handleInputChange}>
                </input>

                <button type="submit">submit</button>
                </div>
            </form>
            
        </div>
    )
}
*/