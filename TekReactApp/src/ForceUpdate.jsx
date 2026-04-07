import React,{Component} from "react";

class ForceUpdateApp extends Component{
    constructor(){
        super();
        this.forceUpdateState=this.forceUpdateState.bind(this);
    }
    forceUpdateState(){
        console.log("force update called");
        this.forceUpdate();
    };  
    render(){
        return(
            <div>
                <h1>Example Generate Random Number</h1>
                <h3>Random Number:{Math.floor(Math.random()*10)}</h3>
                <button onClick={this.forceUpdateState}>Force</button>
            </div>
        );
    }
}
export default ForceUpdateApp;