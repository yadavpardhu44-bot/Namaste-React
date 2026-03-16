import React from "react";
import ReactDOM from "react-dom/client"

const react_element = React.createElement("div", {className: "title"},
    [
        React.createElement("h1",{key: "h1"},"This is H1 tag"),
        React.createElement("h2",{key: "h2"},"This is H2 tag"),
        React.createElement("h3",{key: "h3"},"This is H3 tag")
    ]
);

//JSX
const element = (
    <div className="title">
        <h1>This is H1 tag</h1>
        <h2>This is H2 tag</h2>
        <h3>This is H3 tag</h3>
    </div>
)

const HeadingComponent = () =>{
    return (
        <h1>This is another heading</h1>
    );
};

const TitleComponent = () =>{
    return (<div className="title" id="heading" tabIndex={5}>
        <h1>This is H1 tag</h1>
        <h2>This is H2 tag</h2>
        <h3>This is H3 tag</h3>
        <HeadingComponent></HeadingComponent>
    </div>)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TitleComponent/>);