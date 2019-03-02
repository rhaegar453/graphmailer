import * as actionTypes from './actionTypes';


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

export const getDataAsnc=()=>{
    return dispatch=>{
        setInterval(()=>{
            dispatch(getData(new Data()));
        },3000);
    }
}
