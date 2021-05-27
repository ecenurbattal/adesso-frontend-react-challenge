import { CHANGE_FILTER_VALUES} from "../actions/types";

const initialState = {
    filters:{}
};


const filtersReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_FILTER_VALUES:
            return {...state, filters:action.payload}
        default:
            return state
    }
};

export default filtersReducer;