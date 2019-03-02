import React, { Component } from "react";
import {getDataAsnc, trigger} from '../Store/actions';
import {triggerDetails, dataDetails} from '../Store/actions';

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
  }
  componentDidMount(){  
      this.props.getDataAsnc();
  }
  modalToggle=()=>{
      this.props.dataDetails();
      this.props.modalToggle();
  }
  triggersToggle=()=>{
      this.props.triggerDetails();
      this.props.modalToggle();
  }

  render() {
    return (
      <div>
          <ModalC></ModalC>
        <Grid>
          <Grid.Row centered>
            <BarChart
            barSize={20}
              width={700}
              height={400}
              data={this.props.data}
              barGap={4}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left:5}} allowDataOverflow tickSize={5}/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="RAM" fill="#8884d8" />
              <Bar dataKey="CPU" fill="#82ca9d" />
            </BarChart>
            <LineChart
              width={700}
              height={400}
              data={this.props.data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Total" label="Time"/>
              <YAxis  label="Total CPU Utilization"/>
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="totalUtilization" stroke="#8884d8" />
            </LineChart>
          </Grid.Row>
          <Grid.Row centered>
              <Button color="green" onClick={this.modalToggle}>Show More Details</Button>
              <Button color="red" onClick={this.triggersToggle}>Show My Triggers</Button>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
        data:state.ui.data,
        count:state.ui.count
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        modalToggle:()=>dispatch(modalToggle()),
        getDataAsnc:()=>dispatch(getDataAsnc()),
        triggerDetails:()=>dispatch(triggerDetails()),
        dataDetails:()=>dispatch(dataDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);