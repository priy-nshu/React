import React from "react";
import ReactDOM from "react-dom";

class FindDomNode extends React.Component {
    constructor(){
        super();
        this.findDomNodeHandler1=this.findDomNodeHandler1.bind(this);
        this.findDomNodeHandler2=this.findDomNodeHandler2.bind(this);
    };
    findDomNodeHandler1(){
        var myDiv1= document.getElementById("myDivOne");
        ReactDOM.findDOMNode(myDiv1).style.color="red";
        console.log("FindDomHandler1 called");
    }
    findDomNodeHandler2(){
        var myDiv2=document.getElementById("myDivTwo");
        ReactDOM.findDOMNode(myDiv2).style.color="blue";
        console.log("FindDomHandler2 called");
    }
    render(){
        return(
            <div>
                <h1>ReactJS Find DOM Node Example</h1>
                <button onClick={this.findDomNodeHandler1}>Find DOM Node 1</button>
                <button onClick={this.findDomNodeHandler2}>Find DOM Node 2</button>
                <h3 id="myDivOne">Node 1</h3>
                <h3 id="myDivTwo">Node 2</h3>
            </div>
        );
    }
}
export default FindDomNode;