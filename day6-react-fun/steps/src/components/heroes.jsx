import { Component } from "react";

class HeroesComp extends Component{
    render(){
        return <div>
                    <h2>{ this.props.title }</h2>
                    <ol>
                        {
                            this.props.list.map( (val, idx) =>  <li key={ idx }>{ val }</li> )
                        }
                    </ol>
                </div>
    }
}

export default HeroesComp;