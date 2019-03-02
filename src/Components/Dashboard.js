import React, {Component} from 'react';
import Graphs from './Graphs';



export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Graphs></Graphs>
            </div>
        );
    }
}