// Passing Event handlers as Props

export const EventProps = () => {

    const handleWelcomeUser = (user) => {
        alert(`Hey! ${user}`)
    }

    const handleHover = () => {
        alert(`hey thanks for hovering me`)
    }

    return (
        <>
        {/* we have pass the two props in WelcomeUser  (child component) */}
            <WelcomeUser 
                onClick= {() => handleWelcomeUser("Ashish")} 
                onMouseEnter = {handleHover} 

                />
        </>
    );
};

const WelcomeUser = (props) => {
    const handleGreeting = () => {
        console.log(`Hey user, welcome back`);
        props.onClick();          // we have called back the user
    }
    return (
        <>
            <br/>
            <br/>
            <button onClick={props.onClick}>Click</button>
            <br/>
            <br/>
            <button onMouseEnter={props.onMouseEnter}>Hover me</button>
            <br/>
            <br/>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}