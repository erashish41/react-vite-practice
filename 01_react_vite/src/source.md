1.React does not render `false`, `null`, `undefned`, or `NaN` in the Dom. These values, when used in JSX, 
    will  result in nothing being displayed.

2.However, `0` and empty strings (`""`) are exceptions :

3.Dynamic value: here we made variables function inside JS with the help of { } curely braces in JSX

4.Variable can be embed any JS variable within JSX by { }.
the value of variable will be inserted into the DOM at respective location

5.we can write the JD expression inside the { }, which includes opertaions, function calls.


6.Import and Export
a. default Export: a file can have only 1 default export. In default export we can not import in { } in app.jsx
    e.g. -- import NetflixSeries from "./components/NetflixSeries"
b. named Export: a file can have multiple named exports, but we have put file name in { } in app.jsx
    e.g. -- import {NetflixSeries} from "./components/NetflixSeries"

c. named Import: when importing named exports, the import names must match the export names exactly



d. In NetflixSeries.jsx: -
-  currElem itself represents each element in the seriesData array, so using currElem[0] is incorrect.
- at parameter: current element and index will come
-  You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array
 e.g - <li key={person.id}>...</li>

 e. map method
 const listItems = chemists.map(person => { // Curly brace
  return <li>...</li>;
});
- when we create map method dont describe it there, always describe in other different component

e. Props(properties) 
- in react props are used to transfer data from parent to child component and vice versa
- Porps are immutable, child compnent cant modify the data recevied from parent component 