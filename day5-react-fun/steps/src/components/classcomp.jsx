import { Component } from "react";

class ClassComp extends Component{
    message = "Welcome to your life | Class Component";
    render(){
        return <h1>{ this.message }</h1>
    }
} 

export default ClassComp;