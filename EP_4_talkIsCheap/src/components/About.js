import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("parent componentDidMount")
    }
    render(){
        console.log("parent render");
            return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React webseries</h2>
                {/* <UserClass name={"First"} location={"Devada"}/> */}
                <User name={"B. Pardhu"}/>
            </div>
        );
    }
}


export default About;