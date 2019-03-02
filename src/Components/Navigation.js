import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class Navigation extends Component {
  state = { activeItem: "/" };

  handleDashboardClick = () => {
    this.setState({ activeItem: "Dashboard" });
    this.props.history.push("/Dashboard");
  };

  handleDataClick = () => {
    this.setState({ activeItem: "Data" });
    this.props.history.push("/Data");
  };

  handleTriggeredClick = () => {
    this.setState({ activeItem: "Triggered" });
    this.props.history.push("/Triggered");
  };
  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu attached="top" tabular size="massive">
          <Menu.Item
            name="Dashboard"
            active={activeItem === "Dashboard"}
            onClick={this.handleDashboardClick}
          />
          <Menu.Item
            name="Data"
            active={activeItem === "Data"}
            onClick={this.handleDataClick}
          />
          <Menu.Item
            name="Triggered"
            active={activeItem === "Triggered"}
            onClick={this.handleTriggeredClick}
          />
        </Menu>
      </div>
    );
  }
}

export default withRouter(Navigation);
