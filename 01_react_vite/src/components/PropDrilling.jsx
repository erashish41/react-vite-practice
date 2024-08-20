// The React Context API was released in 2018 to avoid prop drilling by simplifying state 
// management and making sharing data across the component tree more efficient and error-free.


export const ParentComponent = () => {
    return (
      <section
        className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center 
             items-center bg-pink-900 text-white`}
      >
        <h1>Component A</h1>
        <ChildComponent data="React JS" />
      </section>
    );
  };
  
  const ChildComponent = (props) => {
    return (
      <>
        <h1>Hello, I am component B</h1>
        <GrandChildComponent data={props.data} />
      </>
    );
  };
  
  const GrandChildComponent = (props) => {
    return (
      <>
        <h1>Hello, I am component C</h1>
        <GrandGrandChildComponent data={props.data} />
      </>
    );
  };
  
  const GrandGrandChildComponent = (props) => {
    return (
      <>
        <h1>Hello, I love {props.data}</h1>
      </>
    );
  };