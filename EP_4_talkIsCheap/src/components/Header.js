import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
const Header = () => {
    const [btnReact, setBtnReact] = useState("Log In");
    const onlineStatus=useOnlineStatus();
    // console.log("Header");
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Online Status: {onlineStatus?"✅":"🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
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