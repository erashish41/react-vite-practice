// This is for interview question Practice

export const Practice = () => {
    const studends = [];
    return (
        <>
            <p> {studends.length  === 0 && "No studends found"}</p>
            <p> Number of studends: {studends.length} </p>
        </>
    );
};

/*   output is 0 
     number of studends 0
     because in && condition it will checks first right side condition and then left side if right side is false
     it will not see the left side condition and will return back */

/*
    2.  <p> {!studends.length  === 0 && "No studends found"}</p>
        <p> Number of studends: {studends.length} </p>

    3.  const studend = [ 5, 6]
        <p> {studends.length  === 0 && "No studends found"}</p>
        <p> Number of studends: {studends.length} </p>  */