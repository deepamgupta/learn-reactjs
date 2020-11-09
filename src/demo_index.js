import React from "react";
// here "React" is the object and "react" is the module 

import ReactDOM from "react-dom"; // to render elements inside of the real DOM

// Babel is a JS compiler which converts JSX to browser-understandable code
const element = <h1>Hello world</h1>; // JSX expression
// this "element" above is a part of the virtual DOM

// Virtual DOM is a light-weight in-memory representation of the UI.
// It's not the real browser DOM but virtual DOM.

// and when the state of an object changes , the react will get a new react element 
// and it will compare this element with the previous one and then it will reach 
// out to the real DOM and update it accordingly

ReactDOM.render(element, document.getElementById('root'));