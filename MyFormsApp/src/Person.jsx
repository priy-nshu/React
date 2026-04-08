import React from 'react';

class Person extends React.Component {
    constructor(props){
        super(props);
        this.state={
            personGoing: true, numberOfPersons: 5,
            leader:"", showForm:true,dob:"",
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        const target= event.target;
        const value= target.type === "checkbox" ? target.checked : target.value;
        const name= target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        // Handle form submission logic here
        this.setState({showForm: false});
        console.log(this.state.showForm);
        console.log(this.state.personGoing);
    }

    showDetails(){
        if(this.state.showForm)
            {
                <div>
                    <h3>Leader: {this.state.leader}</h3>
                </div>
            }
        }
        render(){
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h1>Multiple input Controlled Form Example</h1>
                        <label>Is Person Going: 
                            <input type="checkbox" name="personGoing" checked={this.state.personGoing} onChange={this.handleChange} />
                        </label>
                        <br />
                        <label>Number of Persons:
                            <input type="number" name="numberOfPersons" value={this.state.numberOfPersons} onChange={this.handleChange} />
                        </label>
                        <br />
                        <label>Leader Name:
                            <input type="text" name="leader" value={this.state.leader} onChange={this.handleChange} />
                        </label>
                        <br />
                        <label>Date of Birth:
                            <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} />
                        </label>
                        <br />
                        <input type="submit"  />
                    </form>
                    {(this.state.showForm )&& <h3>Leader: {this.state.leader}, DOB: {this.state.dob}</h3>}
                    
                </div>
            );
        }
    }

export default Person;