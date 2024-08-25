import { memo, useRef} from "react";


// if we using React.Memo() we have to put the Child component in memo("") to run.
export const MemoCount = memo(({bioData}) => {

    const renderCount = useRef(0);
    return(
        <>
            <div className="mt-3 font-display text-center">
                <p className="">
                    Nothing changed there but now Ive rendered:
                    <span className="text-red-600"> 
                        {renderCount.current ++ } time(s)
                    </span>
                    <p>Hello, my name is {bioData.userName}</p>
                </p>
            </div>
        </>
    )
})