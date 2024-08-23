import { useReducer } from "react";

export const IndexReducer = () => {

    const reducer = (state, action) => {

        if(action.type === "Increment"){
            return state + 1;
        }if(action.type === "Decrement"){
            return state - 1;
        }

    }

    const [count, dispatch] = useReducer(reducer, 0);

    return (
      <>
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center">
          <h1>{count}</h1>
          {/* dispatch has send a action to reducer to perform */}
          <button onClick={() => dispatch({type: "Increment"})}>Increment</button>
          <button onClick={() => dispatch({type: "Decrement"})}>Decrement</button>
          {/* <button onClick={() => dispatch({type: "Reset"})}>Reset</button> */}
        </div>
      </>
    );
  };
  