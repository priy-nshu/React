import React,{Component} from "react";

class DisplayBio extends Component{
    constructor(){
        super();
        this.state={displaybio:true};
    }
    render(){
        const bio=this.state.displaybio ? (
        <div>
            <p><h3>creating a statful component using ES6 syntax</h3></p>
        </div>) : null;
        return(
            <div>
                <h1>State rendered  </h1>
                <button onClick={() => this.setState({displaybio: !this.state.displaybio})}>
                    Toggle Bio
                </button>
                {bio}
                </div>
        );
    }
}   
export default DisplayBio;