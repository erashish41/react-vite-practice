import { useState } from "react"

export const Extra = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone:""
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUser((prev) => ({...prev, [name]: value}));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }

    return (
        <>
            <form onChange="handleFormSubmit">
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please sign up the form</p>

                    <label htmlFor="firstName">First Name :</label>
                    <input type="text" name="firstName" placeholder="First name"  required
                    value={user.firstName} onChange={handleInputChange}></input>
                    <br/>
                    <br/>
                    <label htmlFor="lastName">Second Name : </label>
                    <input type="text" name="lastName" placeholder="Last name" required
                    value={user.lastName} onChange={handleInputChange}></input>
                    <br />
                    <br/>
                    <label htmlFor="email">First Name :</label>
                    <input type="text" name="email" placeholder="Email"  required
                    value={user.email} onChange={handleInputChange}></input>
                    <br/>
                    <br/>
                    <label htmlFor="password">Second Name : </label>
                    <input type="text" name="password" placeholder="Password " required
                    value={user.password} onChange={handleInputChange}></input>
                    <br />
                    <br/>
                    <label htmlFor="phone">First Name :</label>
                    <input type="text" name="phone" placeholder="Phone"  required
                    value={user.phone} onChange={handleInputChange}></input>
                    <br/>
                    <p>By creating to account you agree to our <a href="#" style={{color: "blueviolet"}}>Terms & Policy</a> </p>
                </div>

                <div className="clearfix">
                    <button type="text" className="btn">Sign Up</button>
                </div>
            </form>

            <section className="summary" style={{textAlign: "center", marginTop: "30px"}}>
            <p>Hello, my name is
                <span>{user.firstName} {user.lastName}</span>. My email address is 
                <span>{user.email}</span> and my phone number is <span>{user.phone}</span></p>
            </section>
        </>
    )
}