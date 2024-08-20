import { useRef } from 'react';
import './IndexuseRef.css'

export const IndexuseRef = () => {

    // const username = document.getElementById('username');
    // const password = document.getElementById('password');

    // use this method in React to get the data
    const username = useRef(null);
    const password = useRef(null);
    // console.log(username);    // it will give us to values as object
    



    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }
    

    return(
        <>
            <h1>Hello useRef</h1>

            <form onSubmit={handleFormSubmit}>
                <input type='text' id='username' placeholder='enter username' ref={username}></input>
                <br />
                <input type='text' id='password' placeholder='enter password' ref={password}></input>
                <br />
                <button>submit</button>
            </form>
        </>
    )
}