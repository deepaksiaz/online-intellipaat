import React, { Component } from "react";

class Hero extends Component{
    state = {
        name : "Batman"
    }
    render(){
        return <>
                <p style={ { backgroundColor : "red" } }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia quasi, consequuntur quisquam alias ipsum sunt voluptatum accusantium animi deserunt optio perspiciatis amet! Quaerat recusandae sequi neque rem dicta cupiditate?</p>
                <hr/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia quasi, consequuntur quisquam alias ipsum sunt voluptatum accusantium animi deserunt optio perspiciatis amet! Quaerat recusandae sequi neque rem dicta cupiditate?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia quasi, consequuntur quisquam alias ipsum sunt voluptatum accusantium animi deserunt optio perspiciatis amet! Quaerat recusandae sequi neque rem dicta cupiditate?</p>
                <h3>User Name : { this.state.name }</h3>
                <button onClick={()=> this.setState({ name : "Joker"})}>Change User</button>
                <label htmlFor="uname">User Name</label>
                <input defaultValue={ this.state.name } id="uname" type="text" />
               </>

    }
}

export default Hero;