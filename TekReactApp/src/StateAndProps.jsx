import { Component } from "react";

class StateAndProps extends Component{
    constructor(){
        super();
        this.state={name:"State and Props"};
    }
    render(){
        return(
            <section>
                <p>Welcome to programming in {this.state.name}  </p>
                <JIP jitProp={this.state.name}></JIP>
                
            </section>
        );
    }
}
StateAndProps.defaultProps={
    name:"State and Props"
}

class JIP extends Component{
    render(){
        return( 
            <div>
                <h1>State and Props Example</h1>
                <h3>Welcome to {this.props.jitProp}</h3>
                <p>property from parent component: {this.props.jitProp}</p>
                <p>It is possible to combine state and props in your app.
                    You can set the state in a parent component and then pass it down to a child component as props. 

                </p>
                </div>
        );
    }
}
export default StateAndProps;