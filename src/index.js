// import the react and react dom libraries (import statements)
// using bundler system called webpack

// different module systems between CommonJS and ES2015, import VS require
import React from 'react';
import ReactDOM from 'react-dom'

// create a react component

// functional component, or dummy component because it doesn't handle state
const App = () => {
    // JS will return immediately, 
    // so need to have something for it to return on that line
    // this is where the () come in, one next to the return
    // and the other right after the JSX
    // otherwise would return null
    const buttonText = { text: 'click me!' }
    return ( 
    <div>
        <label className="label" htmlFor="name">
            Enter Name
        </label>
        <input id="name" type="text" />
        {/* first {}, is telling js that we want to refrence a variable, next {} is a JS object */}
        <button style={{backgroundColor: 'blue', color: 'white',}}>
        {/* brackets tell you that we are going to declare a variable */}
            {buttonText.text}
        </button>
    </div>
    );
};


// take a react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));