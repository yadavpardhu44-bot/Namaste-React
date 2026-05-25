import React from "react";
import { useState, useEffect } from "react";

const User = ({name}) => {
    // const [count] = useState(0);
    // const [count2] = useState(1);
    useEffect(() => {
        const timer = setInterval(()=>{
            console.log("Namaste React OP(useEffect)")
        },1000)

        return () =>{
            clearInterval(timer);
            console.log("useEffect return")
        }
    },[])
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: Devada</h3>
            <h3>Contact: @pardhu_react</h3>
        </div>
    )
}

export default User;