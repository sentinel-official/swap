import {
    ACCOUNT_ETHER_BALANCE_FETCH_ERROR,
    ACCOUNT_ETHER_BALANCE_FETCH_IN_PROGRESS,
    ACCOUNT_ETHER_BALANCE_FETCH_SUCCESS,
    ACCOUNT_TOKEN_BALANCE_FETCH_ERROR,
    ACCOUNT_TOKEN_BALANCE_FETCH_IN_PROGRESS,
    ACCOUNT_TOKEN_BALANCE_FETCH_SUCCESS,
} from '../constants/account';
import { combineReducers } from 'redux';

const ETHER = (state = {
    balance: '',
    error: {
        message: '',
    },
    inProgress: false,
}, {
    type,
    data,
}) => {
    switch (type) {
    case ACCOUNT_ETHER_BALANCE_FETCH_IN_PROGRESS:
        return {
            ...state,
            inProgress: true,
        };
    case ACCOUNT_ETHER_BALANCE_FETCH_SUCCESS:
        return {
            ...state,
            balance: data.balance,
            inProgress: false,
        };
    case ACCOUNT_ETHER_BALANCE_FETCH_ERROR:
        return {
            ...state,
            error: {
                ...state.error,
                message: data.message,
            },
            inProgress: false,
        };
    default:
        return state;
    }
};

const TOKEN = (state = {
    balance: '',
    error: {
        message: '',
    },
    inProgress: false,
}, {
    type,
    data,
}) => {
    switch (type) {
    case ACCOUNT_TOKEN_BALANCE_FETCH_IN_PROGRESS:
        return {
            ...state,
            inProgress: true,
        };
    case ACCOUNT_TOKEN_BALANCE_FETCH_SUCCESS:
        return {
            ...state,
            balance: data.balance,
            inProgress: false,
        };
    case ACCOUNT_TOKEN_BALANCE_FETCH_ERROR:
        return {
            ...state,
            error: {
                ...state.error,
                message: data.message,
            },
            inProgress: false,
        };
    default:
        return state;
    }
};

export default combineReducers({
    ETHER,
    TOKEN,
});
