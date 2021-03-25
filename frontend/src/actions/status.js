import { STATUS_MODAL_HIDE, STATUS_MODAL_SHOW } from '../constants/status';

export const showStatusModal = (data) => {
    return {
        type: STATUS_MODAL_SHOW,
        data,
    };
};

export const hideStatusModal = (data) => {
    return {
        type: STATUS_MODAL_HIDE,
        data,
    };
};
