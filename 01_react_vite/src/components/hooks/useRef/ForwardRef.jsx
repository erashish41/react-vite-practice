import { forwardRef, useId, useRef } from "react";

export const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handelFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handelFormSubmit}>
      <BeforeReact19Input label="username" ref={username} />
      <BeforeReact19Input label="password" ref={password} />
      <button>Submit</button>
    </form>
  );
};

// // using before React19 version
// // passing data form Parent to child without using Props and without re-render the components
// const BeforeReact19Input = forwardRef((props, ref) => {
//     const id = useId();
//     return(
//         <div>
//             <label htmlFor={id}> {props.label}</label>
//             <input type="text" ref={ref}/>
//         </div>
//     );
// });

// using after React19 version
const BeforeReact19Input = ({ label, ref }) => {
    const id = useId();
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input type="text" ref={ref} />
      </div>
    );
  };




