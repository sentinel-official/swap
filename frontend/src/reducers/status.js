import { STATUS_MODAL_HIDE, STATUS_MODAL_SHOW } from '../constants/status';
import { combineReducers } from 'redux';

const show = (state = false, {
    type,
    data,
}) => {
    switch (type) {
    case STATUS_MODAL_SHOW:
        return true;
    case STATUS_MODAL_HIDE:
        return false;
    default:
        return state;
    }
};

export default combineReducers({
    show,
});
