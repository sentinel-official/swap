import { FAQ_ACTIVE_INDEX_SET, FAQ_MODAL_HIDE, FAQ_MODAL_SHOW } from '../constants/FAQ';

export const showFAQModal = (data) => {
    return {
        type: FAQ_MODAL_SHOW,
        data,
    };
};

export const hideFAQModal = (data) => {
    return {
        type: FAQ_MODAL_HIDE,
        data,
    };
};

export const setFAQActiveIndex = (data) => {
    return {
        type: FAQ_ACTIVE_INDEX_SET,
        data,
    };
};
