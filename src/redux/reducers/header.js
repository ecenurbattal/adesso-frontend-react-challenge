import {CHANGE_HEADER_TITLE} from '../actions/types';

const initialState = {
    header:null
}

const headerReducer = (state=initialState,action) => {
    switch(action.type) {
        case CHANGE_HEADER_TITLE:
            return {...state,header:action.payload}
        default:
            return state
    }
}

export default headerReducer;