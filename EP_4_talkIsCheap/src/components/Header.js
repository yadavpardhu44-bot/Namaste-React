import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [btnReact, setBtnReact] = useState("Log In");
    // console.log("Header");
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
                <button className="login" onClick={() => {
                    btnReact==="Log In" ? setBtnReact("Log Out") : setBtnReact("Log In");
                }}>{btnReact}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;