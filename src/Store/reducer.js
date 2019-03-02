import * as actionTypes from './actionTypes';
const initialStore={
    modalOpen:false,
    data:[],
    triggered:[]
}


const reducer=(state=initialStore, action)=>{
    switch(action.type){
        case actionTypes.MODAL_TOGGLE:{
            return{
                ...state, 
                modalOpen:!state.modalOpen
            }
        }
        default:
            return state
    }
}

export default reducer;