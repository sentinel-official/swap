import {
    CONNECT_LEDGER_ERROR,
    CONNECT_LEDGER_IN_PROGRESS,
    CONNECT_LEDGER_SUCCESS,
    CONNECT_METAMASK_ERROR,
    CONNECT_METAMASK_IN_PROGRESS,
    CONNECT_METAMASK_SUCCESS,
    CONNECT_MODAL_HIDE,
    CONNECT_MODAL_SHOW,
} from '../../constants/connect';
import { combineReducers } from 'redux';
import ledger from './ledger';
import metamask from './metamask';

const show = (state = false, {
    type,
    data,
}) => {
    switch (type) {
    case CONNECT_MODAL_SHOW:
        return true;
    case CONNECT_MODAL_HIDE:
        return false;
    default:
        return state;
    }
};

const inProgress = (state = false, {
    type,
    data,
}) => {
    switch (type) {
    case CONNECT_LEDGER_IN_PROGRESS:
    case CONNECT_METAMASK_IN_PROGRESS:
        return true;
    case CONNECT_LEDGER_ERROR:
    case CONNECT_LEDGER_SUCCESS:
    case CONNECT_METAMASK_ERROR:
    case CONNECT_METAMASK_SUCCESS:
        return false;
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
    case CONNECT_LEDGER_ERROR:
    case CONNECT_METAMASK_ERROR:
        return {
            ...state,
            message: data.message,
        };
    case CONNECT_LEDGER_SUCCESS:
    case CONNECT_METAMASK_SUCCESS:
        return {
            ...state,
            message: '',
        };
    default:
        return state;
    }
};

export default combineReducers({
    inProgress,
    error,
    show,
    ledger,
    metamask,
});
