import React, { Component } from "react";
import { Button, Header, Icon, Modal, Table, Tab } from "semantic-ui-react";
import { connect } from "react-redux";
import { modalToggle } from "../Store/actions";

class ModalComponent extends Component {
  handleOpen = () => this.props.modalToggle();

  handleClose = () => this.props.modalToggle();

  render() {
    return (
      <Modal
        open={this.props.modalState}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="browser" content="Data" />
        <Modal.Content>
          {this.props.triggerDetails ? (
            <div>
              {this.props.triggerData.length == 0 ? (
                <h3>No triggers yet</h3>
              ) : (
                <div>
                  <h1>
                    <u>Servers Triggered at</u>
                  </h1>
                  <Table color="red" celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Time</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    {this.props.triggerData.map(item => (
                      <Table.Row>
                        <Table.Cell>{item.date}</Table.Cell>
                      </Table.Row>
                    ))}
                    <Table.Body />
                  </Table>
                </div>
              )}
            </div>
          ) : (
            <Table celled color="green">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                  <Table.HeaderCell>CPU Utilization</Table.HeaderCell>
                  <Table.HeaderCell>RAM Utilization</Table.HeaderCell>
                  <Table.HeaderCell>Total Utilization</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.props.data.map(item => (
                  <Table.Row>
                    <Table.Cell>{item.date}</Table.Cell>
                    <Table.Cell>{item.CPU}</Table.Cell>
                    <Table.Cell>{item.RAM}</Table.Cell>
                    <Table.Cell>{item.totalUtilization}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          )}
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.handleClose} inverted>
            <Icon name="checkmark" /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
const mapStateToProps = state => {
  return {
    modalState: state.ui.modalOpen,
    data: state.ui.data,
    triggerDetails: state.ui.triggerDetails,
    triggerData: state.ui.triggerData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    modalToggle: () => dispatch(modalToggle())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalComponent);
