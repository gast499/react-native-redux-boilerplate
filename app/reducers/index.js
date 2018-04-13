import {combineReducers} from 'redux';
import {QUOTES_AVAILABLE, ADD_QUOTE, UPDATE_QUOTE, DELETE_QUOTE} from "../actions/";

let dataState = {quotes: [], loading: true};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case ADD_QUOTE: {
            let quotes = cloneObject(state.quotes);
            quotes.unshift(action.quote);
            state = Object.assign({}, state, {quotes: quotes});
            return state;
        }

        case QUOTES_AVAILABLE: {
            state = Object.assign({}, state, {quotes: action.quotes, loading: false});
            return state;
        }

        case UPDATE_QUOTE: {
            let quote = action.quote;
            let quotes = cloneObject(state.quotes);
            let index = getIndex(quotes, quote.id);
            if (index !== -1) {
                quotes[index]['author'] = quote.author;
                quotes[index]['text'] = quote.text;
            }
            state = Object.assign({}, state, { quotes: quotes});
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