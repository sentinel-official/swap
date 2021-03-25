import { FAQ_ACTIVE_INDEX_SET, FAQ_MODAL_HIDE, FAQ_MODAL_SHOW } from '../constants/FAQ';
import { combineReducers } from 'redux';

const show = (state = false, {
    type,
    data,
}) => {
    switch (type) {
    case FAQ_MODAL_SHOW:
        return true;
    case FAQ_MODAL_HIDE:
        return false;
    default:
        return state;
    }
};

const index = (state = -1, {
    type,
    data,
}) => {
    switch (type) {
    case FAQ_ACTIVE_INDEX_SET:
        return data;
    default:
        return state;
    }
};

export default combineReducers({
    index,
    show,
});
