import { combineReducers } from 'redux';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
    data: bookReducer
});

export default rootReducer;
