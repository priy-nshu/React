import { Component } from "react";

class ClassWithStates extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:null
        };
    }
    componentDidMount(){
        console.log("Component mounted:","Load data from an external source and update the state");
        this.fetchData();
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.data !== this.state.data){
            console.log("Data has been updated:",this.state.data);
        }
    }
    componentWillUnmount(){
        console.log("Component will unmount:","Perform cleanup tasks such as cancelling timers or network requests");
    }
    fetchData(){
        setTimeout(() => {
            this.setState({data:"Data loaded successfully from API"});
        },1000);
    }
    render(){
        return(
            <div>
                <p>Data: {this.state.data}</p>
            </div>
        );
    }
}
export default ClassWithStates;