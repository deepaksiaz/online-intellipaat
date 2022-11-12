import { createRoot } from "react-dom/client"
import FunComp from "./components/funcomp";

// expressions
// props
// events
// state

/* 
let message = "Welcome to your life";
let element = React.createElement("h1",null,message); 
*/
// class based components
/* 
class ClassComp extends Component{
    message = "Welcome to your life | Class Component";
    render(){
        return <h1>{ this.message }</h1>
    }
} 
*/
// function based components 
/* 
let FunComp = () => {
    let message = "Welcome to your life | Function Component";
    return <h1>{ message }</h1>
} 
*/

createRoot(document.getElementById("root")).render(<FunComp/>);
