import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: 'Click to change value!'
    };
  }

  setNewValue = () => {
    this.setState({
      example: 'New value!!'
    })
  }

  render() {
    const { example } = this.state;

    return (
      <div>
        <h1>React</h1>
        <p onClick={ this.setNewValue }>{ example }</p>
      </div>
    );
  }
}
