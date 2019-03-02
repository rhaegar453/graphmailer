import React, {Component} from 'react';
import Graphs from './Graphs';
import { Grid } from 'semantic-ui-react';


export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Grid centered style={{marginTop:"50px"}}>
                <h3><u>CPU/RAM Utilization and Total Utilization</u></h3>
                    <Grid.Row centered>
                    <Graphs></Graphs>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}