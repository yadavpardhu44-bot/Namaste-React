import React from "react";
import ReactDOM from "react-dom/client"
const parent = React.createElement(
    "div", 
    {id: "parent"}, 
    [
        React.createElement("div", {id: "child1"}, 
            React.createElement("h1", {}, "Pardhu Yadav"),
            React.createElement("h2", {}, "This is my heading2")
        ),
        React.createElement("div", {id: "child2"}, 
            React.createElement("h1", {}, "This is my heading1"),
            React.createElement("h2", {}, "This is my heading2")
        )
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);