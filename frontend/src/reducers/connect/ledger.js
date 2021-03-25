import { CONNECT_LEDGER_ERROR, CONNECT_LEDGER_IN_PROGRESS, CONNECT_LEDGER_SUCCESS } from '../../constants/connect';
import { combineReducers } from 'redux';

const inProgress = (state = false, {
    type,
    data,
}) => {
    switch (type) {
    case CONNECT_LEDGER_IN_PROGRESS:
        return true;
    case CONNECT_LEDGER_ERROR:
    case CONNECT_LEDGER_SUCCESS:
        return false;
    default:
        return state;
    }
};

export default combineReducers({
    inProgress,
});
