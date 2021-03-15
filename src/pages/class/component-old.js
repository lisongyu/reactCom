import React, { PureComponent } from 'react';

export default class ComponentOld extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      text: 'demo'

    };
    // this.handleClick = this.handleClick.bind(this)
    console.log('constructor')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  // shouldComponentUpdate(props, state) {
  //   console.log('shouldComponentUpdate')
  //   if (state.text === 'demo') {
  //     return true
  //   }
  //   return false
  // }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  handleClick = () => {
    this.setState({
      text: 'demo2'
    })
  }

  render() {
    console.log('render')
    return (
      <div onClick={this.handleClick}>
        Component-Old--{this.state.text}
      </div>
    )
  }
}