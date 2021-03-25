import { STATUS_MODAL_HIDE } from '../../constants/status';
import { TX_ALLOWANCE_ERROR, TX_ALLOWANCE_IN_PROGRESS, TX_ALLOWANCE_SUCCESS } from '../../constants/tx';
import { combineReducers } from 'redux';

const error = (state = {
    message: '',
}, {
    type,
    data,
}) => {
    switch (type) {
    case TX_ALLOWANCE_ERROR:
        return {
            ...state,
            message: data.message,
        };
    case STATUS_MODAL_HIDE:
        return {
            ...state,
            message: '',
        };
    default:
        return state;
    }
};

const result = (state = {
    hash: '',
    confirmed: false,
}, {
    type,
    data,
}) => {
    switch (type) {
    case TX_ALLOWANCE_SUCCESS:
        return {
            ...state,
            hash: data.hash,
            confirmed: data.confirmed,
        };
    case STATUS_MODAL_HIDE:
        return {
            ...state,
            hash: '',
            confirmed: false,
        };
    default:
        return state;
    }
};

const inProgress = (state = false, {
    type,
}) => {
    switch (type) {
    case TX_ALLOWANCE_IN_PROGRESS:
        return true;
    case STATUS_MODAL_HIDE:
    case TX_ALLOWANCE_ERROR:
    case TX_ALLOWANCE_SUCCESS:
        return false;
    default:
        return state;
    }
};

export default combineReducers({
    result,
    error,
    inProgress,
});
