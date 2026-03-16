import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Logo = () => {
    return(<img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="logo"
    />)
};

const SearchBar  = () => {
    return(<input
        type="text"
        className="search"
        placeholder="search..."
    />)
};

const UserIcon = () =>{
    return <div className="user">👤</div>
};

const Header = () =>{
    return(<div className="header">
        <Logo/>
        <SearchBar/>
        <UserIcon/>
    </div>)
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);