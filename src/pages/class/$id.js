import React, { Component } from 'react';

class Id extends Component {
  constructor(props) {

    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>id-{this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default Id;
