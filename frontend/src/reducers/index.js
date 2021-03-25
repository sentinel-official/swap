import { combineReducers } from 'redux';
import FAQ from './FAQ';
import account from './account';
import connect from './connect';
import snackbar from './snackbar';
import status from './status';
import tx from './tx';

export default combineReducers({
    account,
    FAQ,
    tx,
    connect,
    snackbar,
    status,
});
