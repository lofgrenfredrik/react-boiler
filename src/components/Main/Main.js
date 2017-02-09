import React from 'react';

export default class Main extends React.Component {

  render() {
    const { example, actions } = this.props;

    return (
      <div>
        <h1>React - Redux</h1>
        <p onClick={ actions.setNewValue }>{ example }</p>
      </div>
    );
  }
}
