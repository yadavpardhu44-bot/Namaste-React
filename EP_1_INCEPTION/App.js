import React from "react";
import ReactDOM from "react-dom/client"

alert("React is running");
const Title = () => (
<h1 id="heading" className="jsxheading" tabIndex={5}>
    Namaste React using JSX🚀
</h1>
);

const HeadingComponent = () =>{         //component composition
    return <div id="container">
        <Title></Title>
        <Title />
        {Title()}
        <h1>
            Namaste React Using functional component
        </h1>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); 