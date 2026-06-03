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
    <div className="flex justify-between bg-pink-50 items-center shadow-xl">
        <div className="logo-container">
            <img className="w-56" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul className="flex p-4 m-4">
                <li className="p-4 m-4">Online Status: {onlineStatus?"✅":"🔴"}</li>
                <li className="p-4 m-4"><Link to="/">Home</Link></li>
                <li className="p-4 m-4"><Link to="/about">About Us</Link></li>
                <li className="p-4 m-4"><Link to="/contact">Contact</Link></li>
                <li className="p-4 m-4"><Link to="/grocery">Grocery</Link></li>
                <li className="p-4 m-4">Cart</li>
                <button className="login p-4 m-4 bg-gray-50 rounded-xl" onClick={() => {
                    btnReact==="Log In" ? setBtnReact("Log Out") : setBtnReact("Log In");
                }}>{btnReact}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;