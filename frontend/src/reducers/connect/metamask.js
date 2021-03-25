import {
    CONNECT_METAMASK_ERROR,
    CONNECT_METAMASK_IN_PROGRESS,
    CONNECT_METAMASK_SUCCESS,
} from '../../constants/connect';
import { combineReducers } from 'redux';

const inProgress = (state = false, {
    type,
    data,
}) => {
    switch (type) {
    case CONNECT_METAMASK_IN_PROGRESS:
        return true;
    case CONNECT_METAMASK_ERROR:
    case CONNECT_METAMASK_SUCCESS:
        return false;
    default:
        return state;
    }
};

export default combineReducers({
    inProgress,
});
