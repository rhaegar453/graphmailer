import * as actionTypes from './actionTypes';
const initialStore={
    modalOpen:false,
    data:[],
    triggered:false,
    isRunning:false,
    triggerData:[],
    count:0,
    loading:false,
    triggerDetails:false
}


const reducer=(state=initialStore, action)=>{
    switch(action.type){
        case actionTypes.MODAL_TOGGLE:{
            return{
                ...state, 
                modalOpen:!state.modalOpen
            }
        }
        case actionTypes.GET_DATA:{
            if(state.data.length==11){
                return {
                    ...state,
                    data:state.data.slice(1)
                }
            }
            return{
                ...state,
                data:[...state.data, action.payload]
            }
        }
        case actionTypes.START_TIMER:
        {
            return{
                ...state,
                isRunning:true,
                count:state.count+1
            }
        }

        case actionTypes.RESET_TIMER:
            return{
                ...state,
                isRunning:false,
                count:0
            }

        case actionTypes.TRIGGER_START:{
            return{
                ...state,
                loading:true
            }
        }
        case actionTypes.TRIGGER_FAIL:{
            return{
                ...state,
                loading:false
            }
        }
        case actionTypes.TRIGGER_SUCCESS:{
            let data={};
            data.date=new Date().toTimeString().split(' ')[0];
            return{
                ...state,
                loading:false,
                triggerData:state.triggerData.concat(data)
            }
        }
        case actionTypes.TRIGGER_DETAILS:{
            return{
                ...state,
                triggerDetails:true
            }
        }
        case actionTypes.DATA_DETAILS:{
            return{
                ...state,
                triggerDetails:false
            }
        }
        default:
            return state
    }
}

export default reducer;