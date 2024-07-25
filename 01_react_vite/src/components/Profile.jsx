// In this file we have fetch the data from parent to child and farther passing JSX from child
// it means passing JSX as props

const Profile = () => {
    return (
        <>
            <h1> Profile Card made</h1>
            <ProfileCard 
                name = "Ashish"
                age = { 30 }
                greeting = {
                    <div>
                        <strong>Hi! Ashish have a great day</strong>
                    </div>
                    }
                >
                <p>Hobbies: Reading: Cricket</p>
                <button>Contact</button>
            </ProfileCard>


            <ProfileCard 
                name = "Kally"
                age = { 27 }
                greeting = {
                    <div>
                        <strong>Hi! kally have a great day</strong>
                    </div>
                    }
                >
                <p>Hobbies: Reading: Hiking</p>
                <button>Contact</button>
            </ProfileCard>
        </>
    )
   
}
export default Profile;

// to fetch the data from parent to children just do {children} or {props.children}
function ProfileCard (props){
    const {name, age, greeting, children} = props
    return (
        <>
            <h3> Name: {name} </h3>
            <h4> Age: {age} </h4>
            <h4> {greeting} </h4>
            <div> {children} </div>
        </>
    )
}