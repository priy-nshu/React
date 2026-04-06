import React, { Component } from 'react';

class WelcomeInClass extends Component {
  render() {
    return (
        <div>
      <h3>Welcome, {this.props.name}</h3>
        </div>
    );
  }
}

export default WelcomeInClass;