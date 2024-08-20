1.index.html
2.main.jsx
3.App.jsx
4.Netflix.jsx
5.SeriesList.jsx
6.Practice.jsx
7.seriesData.json
8.Profile.jsx
9.NetflixSeries.module.css
10.NetflixSeries.css
11.EventHandling.jsx
12.EV.css
13.EventProps.jsx
14.useState
    - index.jsx
    - LoginPage.jsx
    - RegistrationReact.jsx
    - Challenge.jsx
    - ContactForm.jsx
15.useEffect
    - IndexOne.jsx
    - DateTime.jsx
    - EffectChallenge.jsx
    - CleanUpuseEffect.jsx
    - HowNotToFetchApi.jsx
    - FetchApiwithFunction.jsx
    - FetchApiwithHandlingandError.jsx
    - AsyncAwaitTryCatch.jsx
16.useRef
    -IndexuseRef.jsx
    -IndexuseRef.css
    -ForwardRef.jsx
17.useId
    -Index.jsx




source.md

- In a React application, the ReactDOM.createRoot method is used to create a root container for your
     React  components. ReactDOM.createRoot is a method in React that allows you to create a root for 
     your React application.

1.React does not render `false`, `null`, `undefned`, or `NaN` in the Dom. These values, when used in JSX, 
    will  result in nothing being displayed.
- However, `0` and empty strings (`""`) are exceptions


2.Fragments: 
- is used to combine the child nodes and render without creating extra parent node
- it is the way to render multiple elements without adding extra node to DOM

3.Dynamic value: here we made variables function inside JS with the help of { } curely braces in JSX


4.Variable can be embaded any JS variable within JSX by { }.
 -   the value of variable will be inserted into the DOM at respective location


5.Javascript XML (JSX) :
- we can write the JS expression inside the { }, which includes opertaions, function calls.
- it allows to write HTML in React and place them in Dom without creteElement() and append Child () method
- JSX expression must have 1 parent element and all are put in it:
        result ( 
            <div>
            <h></h> <p></p>
            </div>
          );


6.Import and Export
a. default Export: a file can have only 1 default export. In default export we can not import in { } in app.jsx
    e.g. -- import NetflixSeries from "./components/NetflixSeries"
b. named Export: a file can have multiple named exports, but we have put file name in { } in app.jsx
    e.g. -- import {NetflixSeries} from "./components/NetflixSeries"

c. named Import: when importing named exports, the import names must match the export names exactly


7.In NetflixSeries.jsx: -
- NetflixSeries is a Component not a Function
    - key and currElem are props which are passed in it
    - currElem itself represents each element in the seriesData array, so using currElem[0] 
    - is incorrect.   at parameter: current element and index will come
    - SeriesList is child component which is called by NetflixSeries as parent component
    - key and data are props(property)
    - key and prop allows the SeriesList component to receive and use the series data (currElem)
- at parameter: current element and index will come
-  You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array
 e.g - <li key={person.id}>...</li>

a. Destructuring
- is the syntax for extracting values from an object property and assigning them to a variable. 
- we can destructure object as well as Array also
- it is used to unpack the value from the source(variable) to vairable.

 b. map method
 const listItems = chemists.map(person => { // Curly brace
  return <li>...</li>;
});

seriesData.map(currElem) => {
          return  <SeriesList key={currElem.imdbid} data={currElem} />
         }
- when we create map method dont describe it there, always describe in other different component

c. Props(properties) 
- in react props are used to transfer data from parent to child component and vice versa
- Porps are immutable, child compnent cant modify the data recevied from parent component 
- means we have destructure the props
- You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array

d. Passing JSX as props: In this file we have fetch the data from parent to child and farther passing JSX 
    from child it means passing JSX as props
- to fetch the data from parent to children just do {children} or {props.children} -- Profile.jsx


8.CSS styling
- a. inline css style are specified using JS object { }.
-    <h2 style={{margin: "1.2rem 0"}}>Original Title: {title}</h2>

- b. inline css can't use directly in JSX to avoid this we have to define outside of render method
-    const btn_style = {
      padding: "1.2rem 2.4rem",
      border: "none",
      fontSize: "1.6rem",
      backgroundColor: "var( --bnt-hover-bg-color)",
      color: "var(--bg-color)",
}

- c. property name are writen in camelCase.
    const style = {
    backgroundColor : 'blue',
    fontSize : '20px',
}

- d. for numerial value we have to use as string property
-    and it take direct value as zIndex
    const style = {
        padding: '10px',
        zIndex: 1,
}


9.Conditional styling for Dynamic UI
-  we can se Ternary Operator to add conditional stylings to our CSS
- make seperate method to render it, name as ratingClass
    <h3>Rating: <span  className = {`rating ${ratingClass}`} >{rating}</span></h3>

Css Modules in react: Scope and Reusable styles
- Css modules are used for particular/specific component that is used in it
 file can be:- module.css
    import './NetflixSeries.module.css'
- import css module file in our React component
- when we use css models and we give className in it,  the value will change and make it unique.
- when import css modude file, it will access class name as properties of imported styles object.
- when we use multiple className than template literals { `` } are used
- things which are not accessable (like hyphens - ) by . notation we have to use bracket notation 
    [ ] for className with hyphens  
    <div className={style[card-content]}>


10.Styled Components (SC) in React for Clean and Dynamic UI
- firstly we have to download styled component from npm site, we can use bun instead of npm
    bun i styled-components  (npm i styled-components)
    then check in package.json that there is a version of SC is avilable or not
    like:-
         "dependencies": {
            "react": "^19.0.0-rc-512b09b2-20240718",
            "react-dom": "^19.0.0-rc-512b09b2-20240718",
            "styled-components": "^6.1.12"
        },
- we have to import with style from file name as given
    import style from './NetflixSeries.module.css'
- we can write the code with both Templete Literals and Styled Component
- SC have to way to write the code 
    a. Templete Literals:                                 b. Style objects:
    a. const Button = styled.button`                      b. const Button = styled.button({
            color: grey;                                             color: 'grey',
            `;                                                          });
    style is object provided by the library and button is method for calling
    button is TagName like (h1, p, a, li, ul, button, img, etc)
    we have to make the component of same TagName
- Style object allow you to write actual CSS code to style your components
- In SC, we can pass a function within the template literal dynamicaly set Css properties based
     on props or state

        {/* this button is for normaly used to fetch the data*/}  
        {/* <button style={btn_style}>Watch now</button>       */}
        
        {/* this buttonName is for styled object*/}
        {/* <ButtonName>Watch now</ButtonName>           */}

        {/* this buttonName is for template literal*/}
        <ButtonName rating = {rating}>Watch now</ButtonName> 


11.Tailwind CSS in React
- It is a utility-first CSS framework which means we can use utility classes to build custom
     designs without writing CSS as in the traditional approach.
- No more silly names for CSS classes and IDs.
- Minimum lines of Code in CSS file.
- We can customize the designs to make the components.
- steps to Install Tailwind: (link - https://tailwindcss.com/docs/guides/vite)

a. Create your project
b. Install Tailwind CSS
- it will show the version  "tailwindcss": "^3.4.7", in devDependencies of package.json
c. Configure your template paths: by this command it will make new file (tailwind.config.js)
- npx tailwindcss init -p
d. Add the Tailwind directives to your CSS file (index.css)
    e. Start your build process
    f. Start using Tailwind in your project

- we can change the properties in Tailwind by appling like this from [Tailwind.com]
e.g. = 
<div className= "flex flex-col gap-6 px-6 py-6  ">
<p className= "text-3xl font-bold underline text-cyan-300">Content Type: {description} </p>


12.Event Handler (EH) in React 
- Event handling in React follows same pattern as JS event handling but with some key difference,
    such as using Synthetic events for cross-browser compatibility and providing consistent
    event handling across different elements and browsers.

- Event Naming Convertions names in JSX should be written in camelCase
- Prifix with 'on': Event handlers should be prefixed with 'on
- some event handlers are 
e.g. - onClick, onChange, onSubmit, onMouseEnter, onMouseLeave, onKeyDown, onKeyup, onFocus, 
    onBlur, onInput 

- Function Naming Convertions in Event Handling
-Prefix with 'handle' - it is common convention to prefix event handler functions with 
    'handle' to clearly indicate their purpose.
e.g. - handleClick, handleChange, handleSubmit


- Synthietic Base Event in React (SE)
- event handling in React is the process of capturing and responding to user inteaction, such as 
    clicks, keystrokes or form submissions, within React app.
- when we handle events in React, like a button or typing in an input box.
- React wrap native browser events in something called a synthetic events
- SE iin REact are cross-brosser wrappers around the browsers origianl event/ native event/
- diffe browser have diff events names
- it provides an unified API

- it will give SyntheticBaseEvent as input in console
- React put this in wrap, so that all the devices work verywell
- in event handling 
    {/* when we use name function we only have to pass the reference */}
    <button onClick={handleButtonClick}> Click me</button>
    {/* in fat arrow fn we have the call the fn like this handleButtonClick() */}
    <button onClick={ () => handleButtonClick()}> Click me 2</button>

- passing Argument to EH
- when we call function and give value to pass in it is called argument
- when we define function and pass the value is called funtion


13.Passing Event Handlers as props
- it is used to allow child components to communicate with parent components.
- various types: -
a. Form Hanlding: passing EH like onChange or onSubmit to form components allows child componet to update
                    the form data and notify parent components of change
b. User Interaction: EV like onClick can be passed to interactive elements (like: button, link)
                    to trigger specific actions in parent component such as opening a modal
                    or navigating to a different page
c. State Management: EV can be used to update state in parent component which can passed to child
                    cmponents as props to reflect the update status
d. Callback Functions: EV can be used as callback function to handle asynchronous operations
                    or to update state based on result of operation


14.Event Propagation (EP)
- EP is done only when all the data is shown in same div
- React follows the same event propogation model as JS DOM events.
- EP refers the process of how events propogate or travel through DOM hierarchy.

- 3 types of EP
a. Catpuring Phase: The event starts from root of DOM and goes down to the target element 
b. Bubbling Phase: The event starts from target element bubbles up to the root of DOM
c. Target Phase: The event reaches the target element

- Target element can be <td>, <tr>
- React provides a way to stop event propagation using the stopPropagation.
- React does not recommend to use EventListener
- we have to use onClickCapture to  get the data from target element to root of DOM 


15.useState Hook:
- in React, state refers to an object that holds data or information about the component.
    (data can be array, string, number, object)
- The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, 
    and any combination of these!
- state is managed within the component(like variables declared in function).
- state is dynamic and mutable.

- React don't understand normal variable, to understand it, React.js provides a function called "useState"
- type of function which starts with "use" is called hook.      (use = hook)

    const [state, setState] = useState(initialState)
    const [ count, setCount ] = useState(0)

    e.g. - const [calories, setCalories] = useState(initial value of calories)
- const is variable(key), calories is state variable (with current value), setCalories is function
    that upadates the state variable, useState have the initial value of state
- setContact((prev) => ({...prev, [name]: value }))
- (...prev) means it will store previous data and to add the data at top or end


Need of State in React:
- interactivity: state makes application interactive. By maintaining state, we can create components
                that respond to user actions, such as clicks, form submissions or keyboard input
- Dynamic UI updates: it allows components to update dynamically in response to user input or other events.
            e.g. in form the state might hold current value of input field, update in real time as user types
- Data managment: state helps manage data within component. we can fetch data from API and store it in state 
                which will then be used to render the UI
- Component Communication: State can be lifted up parent to child component, for consistent data flow


16.How React State works
- Reconciliation: virtual DOM (VDOM) is concept where virtual representation of UI is kept in memeory 
    and synced with real DOM by library such as ReactDOM.
- button calls setState() function which notes React.js that we are trying to update a state
- Diffing Algorithm: in React JS differentiates the updated and previous DOM of the application. 
    DOM stores the components of a website in a tree structure. React uses virtual DOM which is a lightweight version of the DOM.

- State change in ParentComponent: if there is change in ParentComponent, React will re-render ParentComponent
    and all its children
- means if parent component is changed child component will also changes
- if there is Sibling component they will not change if parent or child component changes

17.DerivedState: Derived state refers to state that is derived from props. It's state that needs to be
    updated whenever the props change. This is where getDerivedStateFromProps comes in. It allows you to 
    update the state based on changes in props.

- DS is used to find the data from array with useStates
- DS1 is used to find the average and length of the data given in array


18.Lifting State Up: in this pattern we move the state from child components to a common parent 
    component so that multiple child components can share and synchronize this state.
- this allows data to flow down as props and actions(such as events) to flow up
- when we have 2 or more components that need to share the same state, we should lift the state up
    to their nearest common parent.

- onChange={(e) => setInputValue(e.target.value)} 
- (e) => setInputValue(e.target.value): This is an arrow function that takes an event object e as an argument.
- e.target.value: This is the current value of the input element.
- setInputValue(e.target.value): This updates the state variable inputValue with the new value of the 
    input element.

19.Short-Circuit Evolution: In JavaScript short-circuiting, an expression is evaluated from left to 
    right until it is confirmed that the result of the remaining conditions is not going to affect 
    the already evaluated result.

a. Logical OR (||)
    Syntax: expression || expression2
    Rule: If expression is truthy, return expression. Otherwise, return expression2
    const result = false || 'Hello'; // 'Hello'
    const result2 = true || 'World'; // true

b. Logical AND (&&)
    Syntax: expression && expression2
    Rule: If expression is falsy, return expression. Otherwise, return expression2.
    const result = true && 'Hello'; // 'Hello'
    const result2 = false && 'World'; // false

c. Nullish Coalescing (??)
    Syntax: expression ?? expression2
    Rule: If expression is not null or undefined, return expression. Otherwise, return expression2.
    const result = null ?? 'Hello'; // 'Hello'
    const result2 = undefined ?? 'World'; // 'World'
    const result3 = " ?? 'Fallback'; //"


20.Rules of Hooks
- Functions whose names start with use are called Hooks in React.
- Hooks can only be called inside the body of a function component.
- Do not call Hooks inside conditions or loops.
- Do not call Hooks after a conditional return statement.
- Do not call Hooks in event handlers.
- Do not call Hooks in class components.
- Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.
- Don’t call Hooks inside loops, conditions, or nested functions.
    
- It starts with use (useState, useEffect, useContext, useReducer, useCallback, useMemo, 
    useRef, useLayoutEffect, useDebugValue, useImperativeHandle)
- Hooks can only be used at the top level of your component.
- Do not call Hooks inside loops, conditions, or nested functions.
- You can also create your own custom hooks by creating functions starting with use
    ensures that React can identify it as a Hook. (ex. use Fetch, use Form)
- Ensure Hooks are Called in the Same Order. This allows React to properly preserve between re-renders.

- console.log(useState ()) :it will give us 2 array [undefined, function()]

- Functions passed to useState() and setState() runs twice during development mode to prevent
    developers from running side effects. (due to React.fragments)
- Side effects in programming refer to changes or interactions that occur outside the scope of a
    function or block of code.
- React.js compares previous state and new state using Object.is(), if it finds both are same then it will
    ignore re-rendering.
- React.js batches all setStates() inside a event handlers and run them at the same time.
    to access the value immediately after setting a state, then you will get old value as it'
    asynchronous.

21.Challenge.jsx        
- disabled is used for button to discountinue after certain number
    <button onClick={handleIncrement} disabled= {count >= 100} >Increment</button>

- Controlled components: refer to the components where the state and behaviors are controlled
                         by Parent components.
- Controlled Components are those in which form’s data is handled by the component’s state. It takes 
    its current value through props and makes changes through callbacks like onClick, onChange, etc. 

- Uncontrolled components: are the ones having control of their own state and manage the behaviors 
                         on themselves.
-  Uncontrolled Components are the components that are not controlled by the React state and are 
        handled by the DOM (Document Object Model). 

- <input type="text" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)}> </input>
- the time we put value in input tag it will convert uncontrolled component to controlled component.


22.Data to backend server
    In these above file we have get the data and provide to backend server
a. RegistrationReact.jsx
b. LoginPage.jsx
c. ControlForm.jsx
d. Challenge.jsx


23.UseEffect

- The useEffect hook in React is used for handling side effects in functional components.
                    use Effect(() => {
                        // Your side effect code here
                        return () => {
                        // Cleanup code here (optional)
                    }, [dependencies]);
1. Initial Render: When the component mounts useEffect can run its effect function to perfor
    operations like data fetching.
2. Dependencies: The second argument, an array of dependencies, which determines
    effect should re-run. If any value in this array changes, the effect will re-run.
3. Cleanup: useEffect can return a cleanup function to clean up after the effect, such
    unsubscribing from an event or clearing a timer.
- Cleanup function saves applications from unwanted behaviors like memory leaks by cleaning up effects. 
    In doing so, we can optimize our application’s performance.

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => (prev + 1))
        }, 1000);

        return () => clearInterval(timer)
    }, [])

- A side effect is any operation that affects something outside the scope of a function (Pure function).
    In React, side effects are managed using hooks like useEffect to ensure they are handled in a 
    controlled and predictable manner.
    
- whenever we call the data of Api it will give us null

- Fetch API in React with useEffect

- Why NULL in useState
- Using null as the initial state value in useState is a common pattern when you expect 
    the state to hold a non-array object (like an API response) 
- Using null allows you to easily check whether the data has been fetched.
- null makes it clear that the data has not been fetched yet. This is different from an 
    empty object {} or array [], which might imply that the data is present but empty.
- Using null allows you to easily check whether the data has been fetched. For instance,
     if (!data) can be used to display a loading spinner or message.

 const [pokemon, setPokemon] = useState(null)   
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPokemon(data))
        .catch((error) => console.log(error))

    },[])
    return (
        <ul> data:
                {
                    pokemon.map((currElm) => {
                        return <li key={currElm.id}>{currElm.title}</li>
                    })
                }
             </ul>)
- we can fetch Api with Function also
     useEffect(() => {
        fetchPokemon()
    },[])

    console.log(pokemon);
    after calling fetchPokemon() function we can get the data

- Use [] when you expect the state to eventually hold an array of items.
- Use {} when you expect the state to hold a single object with multiple properties.
- Use null when you want to differentiate between "no data yet" and "data has been fetched".

- Use .map() only on arrays ([]).
- If your state is an object {} that contains an array, you can use .map() on that array 
    (e.g., object.array.map()).
- If your state is null, you must wait until it contains an array (after data is fetched) 
    before using .map().


24.useRef
- The useRef Hook allows you to persist values between renders.
- It can be used to store a mutable value that does not cause a re-render when updated.
- It can be used to access a DOM element directly.
- useRef() only returns one item. It returns an Object called current.
- When we initialize useRef we set the initial value: useRef(0).

- ForwardRef:
- forwardRef is needed to expose a DOM node in a component to its parent component.
- React forwardRef allows parent components to move down (or “forward”) refs to their children. 
- It gives a child component a reference to DOM entity created by its parent component in React.

25.useId
-                const id = useId();
- This hook generates unique IDs i.e, returns a string that is stable across both the server and 
    the client sides.
- Its primary use case is to generate unique IDs for HTML form elements and ensure that the IDs 
    are always unique in the context of the React application.