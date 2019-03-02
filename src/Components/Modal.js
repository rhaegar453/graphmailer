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
            <h3><b><u>CPU </u></b></h3>
            
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
        modalState:state.ui.modalOpen,
        data:state.ui.data
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        modalToggle:()=>dispatch(modalToggle())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);