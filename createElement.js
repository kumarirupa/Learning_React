import React from "react";
import ReactDOM from "react-dom/client";

/**create nested element and create two h1 and h2 siblings using array, also two child child1 and child2 */
//React.createElement => reactelement = js object => (htmlelement) render

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", {}, "I am Rupa"),
//         React.createElement("h2", {}, "I am h2 tag"),
//         ]),
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", {}, "I am h1 tag"),
//         React.createElement("h2", {}, "I am h2 tag"),
//         ]),
// ]);

// console.log(parent);
// const root = ReactDOM?.createRoot(document.getElementById("root"));
// root.render(parent);

/**create single element */

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");

// console.log(heading); // print object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//jsx = HTML like or XML syntax (transpiled before it reaches to javascript engine) - parcel is doing this by using Babel

//jsx => Babel transpiles it to React.createElement => reactelement = js object => (htmlelement) render

//const jsxHeading = <h1 id="heading">This is jsx</h1>;




// React element
const heading = (
  <h1 id="heading" tabIndex="5">
    This is jsx
  </h1>
);

// this two functions returns the same value

const fn = () => true;

const fn2 = () => {
    return true;
};

//React Component
// Class Based Components - OLD -uses javascript classes to create components
//Functional Components - NEW - uses javascript function to create components

//React Functional Component - is just a normal javascript function which returns some piece of jsx or returns a react element
// these both code are same
const HeadingComponent = () =>{
    return <h1>Functional Component</h1>;
};

const Title = () => (
  <h1 id="heading" tabIndex="5">
    This is jsx
  </h1>
);

const number = 1000;

const HeadingComponent2 = () => ( 
    <div id="container">
      {/* <Title/> */}
      {number}
      {100 + 300}
      {/* {heading} */}
      {Title()}
<h1 className="heading">Functional Component</h1>
</div>
);


console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent2/>);

