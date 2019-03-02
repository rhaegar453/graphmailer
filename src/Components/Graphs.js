import React, { Component } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
  Line,
  LineChart
} from "recharts";
import {modalToggle} from '../Store/actions';
import ModalC from './Modal';
import {connect} from 'react-redux';

import { Grid, Button, Modal, Portal, Header, Icon } from "semantic-ui-react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          date: "Page A",
          RAM: 40,
          CPU: 24,
          total: 24
        },
        {
          name: "Page B",
          RAM: 30,
          CPU: 13,
          total: 22
        },
        {
          name: "Page C",
          RAM: 20,
          CPU: 98,
          total: 22
        },
        {
          name: "Page D",
          RAM: 27,
          CPU: 39,
          total: 20
        },
        {
          name: "Page E",
          RAM: 18,
          CPU: 48,
          total: 21
        },
        {
          name: "Page F",
          RAM: 23,
          CPU: 38,
          total: 25
        },
        {
          name: "Page G",
          RAM: 34,
          CPU: 43,
          date: 21
        }
      ]
    };
  }
  modalToggle=()=>{
      this.props.modalToggle()
  }
  render() {
    return (
      <div>
          <ModalC></ModalC>
        <Grid>
          <Grid.Row>
            <BarChart
              width={600}
              height={300}
              data={this.state.data}
              barGap={4}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="RAM" fill="#8884d8" />
              <Bar dataKey="CPU" fill="#82ca9d" />
            </BarChart>
            <LineChart
              width={600}
              height={300}
              data={this.state.data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Total" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="total" stroke="#8884d8" />
            </LineChart>
          </Grid.Row>
          <Grid.Row centered>
            <div>
              <Button color="red" onClick={this.modalToggle}>Show More Details</Button>
            </div>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        modalToggle:()=>dispatch(modalToggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);