//          E V E N T  H A N D L I N G
import './EV.css'

export const EventHandling = () => {

const handleButtonClick = (event) =>{
    console.log(event);                 
    // it will give SyntheticBaseEvent as input in console
    // React put this in wrap, so that all the devices work verywell

    console.log(event.target);
    console.log(event.type);
    alert("Hi, i am onClick Event");

}

//  here we have to pass the parameter 
const handleWelcomeUser = (user) => {
    console.log(`Hey ${user} welcome`);
}

    return (
        <>
            {/* when we use name function we only have to pass the reference */}
            <button onClick={handleButtonClick}> Click me</button> 
            <br/>
            <br/>
            {/* in fat arrow fn we have to call the fn like this handleButtonClick() */}
            <button onClick={ (event) => handleButtonClick(event)}> Click me 2</button>
            <br/>
            <br/>
            {/* in line event handlers */}
            <button onClick={ (event) => console.log(event)}> Inline function</button>
            <br/>
            <br/>
            {/* function components with Inline Arrow fn */}
            <button onClick={() => alert("hey I am inline event fn")}>Inline Arr Fn</button>
            <br/>
            <br/>
            {/* passing arguments to Event handlers */}
            {/* dont use this method to call the argument */}
            {/* <button onClick={handleWelcomeUser("Ashish")}></button> */}
            {/* always use this method to call the argument with arrow function */}
            <button onClick= {() => handleWelcomeUser("Ashish")}>passing argument</button>
        </>
    );
};