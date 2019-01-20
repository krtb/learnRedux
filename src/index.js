// import the react and react dom libraries (import statements)
// using bundler system called webpack

// different module systems between CommonJS and ES2015, import VS require
import React from 'react';
import ReactDOM from 'react-dom'

// create a react component

// functional component, or dummy component because it doesn't handle state
const App = () => {
    return <div>
        Hi, there!
    </div>
}


// take a react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector
);