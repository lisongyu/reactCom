import React, { Component } from 'react';
import CreatePortal from '../CreatePortal'
import {Icon} from 'antd-mobile'
const Styles = {}
export default class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleClose = () => {
    const {onClose}=this.props
    onClose&&onClose()
  }

  render() {
    const { show } = this.props
    console.log(show)
    return (
      <>
        {show?<CreatePortal style={Styles.modal}>
          <div style={Styles.body}>
            {this.props.children}
            <Icon type='cross' size='lg' style={Styles.close} onClick={this.handleClose} />
          </div>
        </CreatePortal>:null}
      </>
    )
  }
}