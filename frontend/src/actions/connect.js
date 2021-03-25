import {
    CONNECT_LEDGER_ERROR,
    CONNECT_LEDGER_IN_PROGRESS,
    CONNECT_LEDGER_SUCCESS,
    CONNECT_METAMASK_ERROR,
    CONNECT_METAMASK_IN_PROGRESS,
    CONNECT_METAMASK_SUCCESS,
    CONNECT_MODAL_HIDE,
    CONNECT_MODAL_SHOW,
} from '../constants/connect';

export const showConnectModal = (data) => {
    return {
        type: CONNECT_MODAL_SHOW,
        data,
    };
};

export const hideConnectModal = (data) => {
    return {
        type: CONNECT_MODAL_HIDE,
        data,
    };
};

export const setConnectMetaMaskInProgress = (data) => {
    return {
        type: CONNECT_METAMASK_IN_PROGRESS,
        data,
    };
};

export const setConnectMetaMaskError = (data) => {
    return {
        type: CONNECT_METAMASK_ERROR,
        data,
    };
};

export const setConnectMetaMaskSuccess = (data) => {
    return {
        type: CONNECT_METAMASK_SUCCESS,
        data,
    };
};

export const setConnectLedgerInProgress = (data) => {
    return {
        type: CONNECT_LEDGER_IN_PROGRESS,
        data,
    };
};

export const setConnectLedgerError = (data) => {
    return {
        type: CONNECT_LEDGER_ERROR,
        data,
    };
};

export const setConnectLedgerSuccess = (data) => {
    return {
        type: CONNECT_LEDGER_SUCCESS,
        data,
    };
};
