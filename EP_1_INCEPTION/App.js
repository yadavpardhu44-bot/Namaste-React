import React from "react";
import ReactDOM from "react-dom/client"

alert("React is running");
const jsxheading = (
<h1 id="heading" className="jsxheading" tabIndex={5}>
    Namaste React using JSX🚀
</h1>
);
console.log(jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);