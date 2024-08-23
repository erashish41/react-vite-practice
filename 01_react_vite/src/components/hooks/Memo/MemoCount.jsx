import { memo, useRef} from "react";


// no need to export on top when using React.Memo()
const MemoCount = () => {

    const renderCount = useRef(0);
    return(
        <>
            <div className="mt-3 font-display text-center">
                <p className="">
                    Nothing changed there but now Ive rendered:
                    <span className="text-red-600"> 
                        {renderCount.current ++ } time(s)
                    </span>
                </p>
            </div>
        </>
    )
}

export default memo(MemoCount);