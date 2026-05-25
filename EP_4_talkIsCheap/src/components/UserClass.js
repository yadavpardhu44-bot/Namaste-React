import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                name:"default",
                location:"default",
            }
        }
        console.log(this.props.name + "child constructor")
    }
    async componentDidMount(){
        console.log(this.props.name + "child componentDidMount");
        const data = await fetch("https://api.github.com/users/yadavpardhu44-bot");
        const json = await data.json();
        this.setState({
            userInfo:json,
        })
        //console.log(json);
        this.timer = setInterval(() => {
            console.log("Namaste React OP")
        },1000)
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        //console.log("componentWillUnmount")
    }
    render(){
        //const {name, location} = this.props;
        const {name, location, avatar_url} = this.state.userInfo;
        console.log(this.props.name + "child render");
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: @pardhu_react</h3>
            </div>
        )
    }
}

export default UserClass;