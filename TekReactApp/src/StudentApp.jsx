import React ,{Component} from "react";

class StudentApp extends Component{
    constructor(){
        super();
        this.state={
            Data:[            
                {name:"Priyanshu"},
                {name:"Priyanshu2"},
                {name:"Priyanshu3"}
            ]
        }
    }
    render(){
        return(
            <div>
                <StudentName></StudentName>
                <ul>
                    {this.state.Data.map((item) => <List data={item} />)}
                </ul>
            </div>
        );
    }
}
class StudentName extends Component{
    render(){
        return(
            <div>
            <h3>Student Name Details</h3>
            </div>

        );
    }
}
class List extends Component{
    render(){
        return(
            <ul>
                <li>{this.props.data.name}</li>
            </ul>
        );
    }
}
export default StudentApp;