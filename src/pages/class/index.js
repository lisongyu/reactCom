import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link } from 'umi'
export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>class demo</h1>
        <List>
          <List.Item>
            <Link to="/class/component-old">
              component-old
            </Link>
            <Link to="/class/component-new">
              component-new
            </Link>
            <Link to="/class/lists">
              lists
            </Link>
            <Link to="/dva">
              dva
            </Link>

          </List.Item>
        </List>
      </div>
    )
  }
}
