//  2 way data is shown in backend server
// if the input value is more than 4 then we have to use object method only (this given below)

import { useState } from "react"

export const ContactForm = () => {

    const [contact, setContact] = useState({
        username : "",
        password : "", 
        message : "",
    });


    const handleInputChange =(e) => {
        const {name, value} = e.target
        setContact((prev) => ({...prev, [name]: value }))
    }


    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log(contact);   // this is directly connected with submit after submit the data will show
        
    }   


    return(

        <div className="container">
            <form onSubmit={handleContactSubmit}>
                <div className="cart">
                    <h1>Contact Form</h1>
                </div>
            
                <label htmlFor="username">Username</label>
                <input type="text" name="username" required autoComplete="off"
                value={contact.username} onChange={handleInputChange}></input>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" required autoComplete="off"
                value={contact.password} onChange={handleInputChange}></input>

                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" required autoComplete="off" rows={6}
                value={contact.message} onChange={handleInputChange}></textarea>

                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}






/* another method to get data and put for backend


import { useState } from "react"

export const ContactForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")


    const handleContactSubmit = (e) => {
        e.preventDefault();

        // data have keys and values
        const Data = {
            username,
            password,
            message,
        }
        console.log(Data);
        
    }   


    return(
        <div className="container">
            <div className="cart">
                <h1>Contact Form</h1>
            </div>
            <form onSubmit={handleContactSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" required autoComplete="off"
                value={username} onChange={(e) => setUsername(e.target.value)}></input>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" required autoComplete="off"
                value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" required autoComplete="off" rows={6}
                value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                <button type="submit">submit</button>

            </form>
        </div>
    )
}

*/