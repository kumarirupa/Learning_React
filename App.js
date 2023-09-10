/**create nested element and create two h1 and h2 siblings using array, also two child child1 and child2 */

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
        ]),
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
        ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




/**create single element */

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");

// console.log(heading); // print object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);