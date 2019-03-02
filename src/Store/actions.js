import * as actionTypes from './actionTypes';
import axios from 'axios';
import {store} from '../index';


export const modalToggle=()=>{
    return{
        type:actionTypes.MODAL_TOGGLE
    }
}


class Data{
    constructor(){
        this.date=new Date().toTimeString().split(' ')[0];
        this.RAM=Math.floor(Math.random()*100);
        this.CPU=Math.floor(Math.random()*100);
        this.totalUtilization=Math.floor(Math.random()*100);
    }
    returnData(){
        return setInterval(()=>{
            console.log(new Data());
        },1000);
    }
}

export const getData=(data)=>{
    return {
        type:actionTypes.GET_DATA,
        payload:data
    }
}


export const startTime=()=>{
    return{
        type:actionTypes.START_TIMER
    }
}

export const triggerDetails=()=>{
    return {
        type:actionTypes.TRIGGER_DETAILS
    }
}

export const dataDetails=()=>{
    return{
        type:actionTypes.DATA_DETAILS
    }
}

export const resetTime=()=>{
    return{
        type:actionTypes.RESET_TIMER
    }
}

export const triggerStart=()=>{
    return{
        type:actionTypes.TRIGGER_START
    }
}
export const triggerSuccess=()=>{
    return{
        type:actionTypes.TRIGGER_SUCCESS
    }
}

export const triggerFail=()=>{
    return{
        type:actionTypes.TRIGGER_FAIL
    }
}
export const trigger=()=>{
    
    return dispatch=>{
        if(store.getState().count>2){
            dispatch(trigger());
        }
        dispatch(triggerStart());
        let headers={
            "Content-Type":"application/json"
        }

        let url="https://emailclient2.herokuapp.com/send";
        axios
        .get(url)
        .then(data=>{
            console.log(data);
            dispatch(triggerSuccess());
            dispatch(resetTime());
        })
        .catch(err=>{
            console.log(err);
            dispatch(triggerFail());
        });
    }
}



export const getDataAsnc=()=>{
    return (dispatch, getState)=>{
        if(getState().ui.count>1){
            dispatch(trigger());
        }
        setInterval(()=>{
            let x=new Data();
            if(getState().ui.count>1){
               dispatch(trigger());
            }
            if(x.totalUtilization>=50){
                dispatch(startTime());
            }
            else{
                console.log('Dispatching reset')
                dispatch(resetTime());
            }
            dispatch(getData(x));
        },3000);
    }
}


