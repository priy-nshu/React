import React, { Component } from 'react';

class MyCallRef extends React.Component {
  constructor(props) {
    super(props);
    this.callRef = React.createRef();   // step 1
    this.addingRefInput = this.addingRefInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addingRefInput() {
    console.log(this.callRef.current.value);
    this.callRef.current.focus();
    // process the data
    // reset the controls
  }
  handleChange() {
    console.log("Text: " ,this.callRef.current.value);
    if(this.callRef.current.value !="james"){
      console.log("Invalid name");
      this.callRef.current.focus();
    }
  }

  // line 22 step 2, line 23 step 3 to call event handler
  render() {
    return (
      <div>
        <h2>Adding Ref to DOM element</h2>
        <input type="text" onChange={this.handleChange} ref={this.callRef} />   {/* step 2 */}
        <input type="button" value="Add text input" onClick={this.addingRefInput}
        />
      </div>
    );
  }
}

export default MyCallRef;