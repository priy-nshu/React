import React,{Component} from "react";

export default class ParentComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            parentName: "Parent"
        };
    }
    greetParent(){
        console.log(`Function called indicating that child class has finished processing `);
            alert('Hello World');
    }
    render(){
        return(
            <div>
                <p>Here we display rows of data</p>
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        );
    }
}

class ChildComponent extends Component{
    render(){
        return(
            <div>
                <p>Child Component allows edit of records selected from parent component</p>
                <button onClick={this.props.greetHandler}>Greet Parent</button>
            </div>
        );
    }
}
