import { ACCOUNT_TOKEN_BALANCE_FETCH_SUCCESS } from '../../constants/account';
import { STATUS_MODAL_HIDE } from '../../constants/status';
import {
    TX_BURN_AMOUNT_SET,
    TX_BURN_ERROR,
    TX_BURN_IN_PROGRESS,
    TX_BURN_SUCCESS,
    TX_BURN_TO_ADDRESS_SET,
} from '../../constants/tx';
import { combineReducers } from 'redux';

const amount = (state = {
    value: '',
    error: {
        message: '',
    },
}, {
    type,
    data,
}) => {
    switch (type) {
    case TX_BURN_AMOUNT_SET:
        return {
            ...state,
            value: data.value,
            error: {
                ...state.error,
                message: data.error.message,
            },
        };
    case ACCOUNT_TOKEN_BALANCE_FETCH_SUCCESS:
        return {
            ...state,
            value: data.balance,
        };
    case TX_BURN_SUCCESS:
        return {
            ...state,
            value: '',
            error: {
                ...state.error,
                message: '',
            },
        };
    default:
        return state;
    }
};

const toAddress = (state = {
    value: '',
    error: {
        message: '',
    },
}, {
    type,
    data,
}) => {
    switch (type) {
    case TX_BURN_TO_ADDRESS_SET:
        return {
            ...state,
            value: data.value,
            error: {
                ...state.error,
                message: data.error.message,
            },
        };
    case TX_BURN_SUCCESS:
        return {
            ...state,
            value: '',
            error: {
                ...state.error,
                message: '',
            },
        };
    default:
        return state;
    }
};

const error = (state = {
    message: '',
}, {
    type,
    data,
}) => {
    switch (type) {
    case TX_BURN_ERROR:
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
    case TX_BURN_SUCCESS:
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
    case TX_BURN_IN_PROGRESS:
        return true;
    case STATUS_MODAL_HIDE:
    case TX_BURN_ERROR:
    case TX_BURN_SUCCESS:
        return false;
    default:
        return state;
    }
};

export default combineReducers({
    amount,
    toAddress,
    error,
    result,
    inProgress,
});
