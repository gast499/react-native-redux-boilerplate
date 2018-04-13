import {combineReducers} from 'redux';
import {QUOTES_AVAILABLE, ADD_QUOTE, UPDATE_QUOTE, DELETE_QUOTE} from "../actions/";

let dataState = { quotes: [], loading:true};

const dataReducer = ( state = dataState, action) => {
    switch (action.type) {
        case ADD_QUOTE: {
            let quotes = cloneObject(state.quotes);
            quotes.unshift(action.quote);
            state = Object.assign({}, state, {quotes: quotes});
            return state;
        }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;