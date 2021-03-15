import React, { Component } from 'react';

import { PropTypes } from 'prop-types';

export default class ListItem1 extends Component {
  static defaultProps = {
    name: 'item3'
  }

  static propTypes = {
    name: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>items--{this.props.name}</h1>
      </div>
    )
  }
}