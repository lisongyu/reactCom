import React, { Component } from 'react';

import ListItem1 from './list-item1';
export default class lists extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <ListItem1 />
      </div>
    )
  }
}