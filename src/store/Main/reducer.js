import * as pro from './action-type'

let defalutState = {
    dataList: []
}

export const proData = (state=defalutState,action) =>{
    switch(action.type) {
        case pro.GETLISTDATA:
            return {...state,...action}
        default:
            return state;
    }
}