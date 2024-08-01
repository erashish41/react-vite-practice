1.index.html
2.main.jsx
3.App.jsx
4.Netflix.jsx
5.SeriesList.jsx
6.seriesData.json
7.Profile.jsx
Practice.jsx
source.md

In a React application, the ReactDOM.createRoot method is used to create a root container for your React components.

1.React does not render `false`, `null`, `undefned`, or `NaN` in the Dom. These values, when used in JSX, 
    will  result in nothing being displayed.

2.However, `0` and empty strings (`""`) are exceptions :

3.Dynamic value: here we made variables function inside JS with the help of { } curely braces in JSX

4.Variable can be embed any JS variable within JSX by { }.
 -   the value of variable will be inserted into the DOM at respective location

5.we can write the JD expression inside the { }, which includes opertaions, function calls.


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

- Function Naming Convertions,
-Prefix with 'handle' - it is common convention to prefix event handler functions with 
    'handle' to clearly indicate their purpose.
e.g. - handleClick, handleChange, handleSubmit


- Synthietic Base Event in React (SE)
- event handling in React is the process of capturing and responding touser inteaction, such as 
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