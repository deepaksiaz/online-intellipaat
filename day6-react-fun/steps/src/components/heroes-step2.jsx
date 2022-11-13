import { Component } from "react";

class HeroesComp extends Component{
   /*  
    static defaultProps = {
        title : "Default Title",
        version : 100001,
        list : ['default hero']
    } 
    */
    render(){
        return <div>
                    <h2>{ this.props.title } | Version : { this.props.version }</h2>
                    { <ol>
                        {
                            this.props.list.map( (val, idx) =>  <li key={ idx }>{ val }</li> )
                        }
                    </ol> }
                </div>
    }
}

HeroesComp.defaultProps = {
    title : "Default Title",
    version : 100001,
    list : ['default hero']
}

export default HeroesComp;
