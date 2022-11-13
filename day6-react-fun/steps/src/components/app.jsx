import { Component } from "react";
import HeroesComp from "./heroes";

class App extends Component{
    state = {
        avengers : ['Ironman','Hulk'],
        justiceleague : ['Batman','Superman','Aquaman'],
        indicheroes : ['Shaktiman'],
    }
    render(){
        return <div>
                    <h1>Hereos Application</h1>
                    <HeroesComp list={ this.state.avengers } title="Avengers" />
                    <HeroesComp list={ this.state.justiceleague } title="Justice League" />
                    <HeroesComp list={ this.state.indicheroes } title="Indic Heroes" />
               </div>
    }
}

export default App;