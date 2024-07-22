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