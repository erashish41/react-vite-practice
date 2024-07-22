React does not render `false`, `null`, `undefned`, or `NaN` in the Dom. These values, when used in JSX, will result in nothing being displayed.

However, `0` and empty strings (`""`) are exceptions :

