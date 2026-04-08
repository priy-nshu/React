import React from 'react';

export default class MyUCForm1 extends React.Component {
    constructor(props){
        super(props);
        this.UpdateSubmit= this.UpdateSubmit.bind(this);
        this.nameRef= React.createRef();
        this.companynameRef= React.createRef();
        this.dateofbirthRef= React.createRef();
    }
    UpdateSubmit(event){
        const compname= this.companynameRef.current.value;
        alert("You have entered the UserName and the Company Name Successfully. Name: "+
             this.nameRef.current.value + " Company Name: " + compname + " Date of Birth: " + this.dateofbirthRef.current.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.UpdateSubmit}>
                <h1>Uncontrolled Form Example</h1>
                <label>
                    Name: <input type="text" id="myName" value='Ginger' ref={this.nameRef} />
                </label>
                <br />
                <label>
                    Company Name: <input type="text" id="CompanyName" ref={this.companynameRef} />
                </label>
                <br />
                <label>
                    Date of Birth: <input type="date" id="myDateOfBirth" ref={this.dateofbirthRef} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
