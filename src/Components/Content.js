import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Triggered from './Triggered';

const Content=(props)=>{
    return(
        <div>
            <Switch>
                <Route path="/" exact component={Dashboard}></Route>
                <Route path="/Dashboard" exact component={Dashboard}></Route>
            </Switch>
        </div>
    );
}
export default Content