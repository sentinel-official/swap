import { combineReducers } from 'redux';
import allowance from './allowance';
import burn from './burn';

export default combineReducers({
    allowance,
    burn,
});
