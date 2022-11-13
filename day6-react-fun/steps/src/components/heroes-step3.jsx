import { Component } from "react";
import PropTypes from "prop-types";

class HeroesComp extends Component{
   /*  
    static defaultProps = {
        title : "Default Title",
        version : 100001,
        list : ['default hero']
    } 
    */
   static propTypes = {
    title : PropTypes.string.isRequired,
    version : PropTypes.number.isRequired,
    list : PropTypes.arrayOf(PropTypes.string).isRequired
   }
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
/* 
HeroesComp.defaultProps = {
    title : "Default Title",
    version : 100001,
    list : ['default hero']
} 
*/

export default HeroesComp;
