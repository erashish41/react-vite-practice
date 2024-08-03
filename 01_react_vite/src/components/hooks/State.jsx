export const State = () => {
    let count = 0;
    
    const handleButtonClick = () => {
        count++;
        console.log(count);
        
    }

    return(
        <>
        <h2>{count}</h2>
        <button onClick={handleButtonClick}>Increment</button>
        </>
    )
}