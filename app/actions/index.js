export const QUOTES_AVAILABLE = 'QUOTES_AVAILABLE';
export const ADD_QUOTE = 'ADD_QUOTE';
export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const DELETE_QUOTE = 'DELETE_QUOTE';
import {AsyncStorage} from 'react-native';

export function addQuote(quote) {
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, quotes) => {
            if (quotes !== null) {
                quotes = JSON.parse(quotes);
                quotes.unshift(quote);
                AsyncStorage.setItem('data', JSON.stringify(quotes), () => {
                    dispatch({type: ADD_QUOTE, quote: quote});
                });
            }
        });
    };
}

export function getQuotes() {
    return (dispatch) => {
        AsyncStorage.getItem('data', (err, quotes) => {
            if (quotes !== null) {
                dispatch({type: QUOTES_AVAILABLE, quotes: JSON.parse(quotes)});
            }
        });
    };
}

export function updateQuote(quote) {
    return (dispatch) => {
        AsyncStorage.getItem('data', (err,quotes) => {
            if (quotes !== null) {
                quotes = JSON.parse(quotes);
                var index = getIndex(quotes, quote.id);
                if (index !== -1) {
                    quotes[index]['author'] = quote.author;
                    quotes[index]['quote'] = quote.quote;
                }
                AsyncStorage.setItem('data', JSON.stringify(quotes), () => {
                    dispatch({type: UPDATE_QUOTE, quote:quote});
                });
            }
        });
    };
}