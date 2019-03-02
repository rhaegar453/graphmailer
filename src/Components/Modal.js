import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {modalToggle} from '../Store/actions';

class ModalComponent extends Component {
  state = { modalOpen: this.props.modalOpen }

  handleOpen = () => this.props.modalToggle()

  handleClose = () => this.props.modalToggle()

  render() {
    return (
      <Modal
        open={this.props.modalState}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Cookies policy' />
        <Modal.Content>
          <h3>This website uses cookies to ensure the best user experience.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
const mapStateToProps=(state)=>{
    return{
        modalState:state.ui.modalOpen
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        modalToggle:()=>dispatch(modalToggle())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);