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

e. Conditional styling for Dynamic UI
-  we can se Ternary Operator to add conditional stylings to our CSS
- make seperate method to render it, name as ratingClass
    <h3>Rating: <span  className = {`rating ${ratingClass}`} >{rating}</span></h3>

f. Css Modules in react: Scope and Reusable styles
- Css modules are used for particular/specific component that is used in it
 file can be:- module.css
    import style from './NetflixSeries.module.css'
- import css module file in our React component
- when we use css models and we give className in it,  the value will change and make it unique.
- when import css modude file, it will access class name as properties of imported styles object.
- when we use multiple className than template literals { `` } are used
- things which are not accessable (like hyphens - ) by . notation we have to use bracket notation [ ] for 
    className with hyphens  
    <div className={style[card-content]}>