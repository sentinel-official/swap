import {
    TX_ALLOWANCE_ERROR,
    TX_ALLOWANCE_IN_PROGRESS,
    TX_ALLOWANCE_SUCCESS,
    TX_BURN_AMOUNT_SET,
    TX_BURN_ERROR,
    TX_BURN_IN_PROGRESS,
    TX_BURN_SUCCESS,
    TX_BURN_TO_ADDRESS_SET,
} from '../constants/tx';

export const setTxAllowanceInProgress = (data) => {
    return {
        type: TX_ALLOWANCE_IN_PROGRESS,
        data,
    };
};

export const setTxAllowanceError = (data) => {
    return {
        type: TX_ALLOWANCE_ERROR,
        data,
    };
};

export const setTxAllowanceSuccess = (data) => {
    return {
        type: TX_ALLOWANCE_SUCCESS,
        data,
    };
};

export const setTxBurnAmount = (data) => {
    return {
        type: TX_BURN_AMOUNT_SET,
        data,
    };
};

export const setTxBurnToAddress = (data) => {
    return {
        type: TX_BURN_TO_ADDRESS_SET,
        data,
    };
};

export const setTxBurnInProgress = (data) => {
    return {
        type: TX_BURN_IN_PROGRESS,
        data,
    };
};

export const setTxBurnError = (data) => {
    return {
        type: TX_BURN_ERROR,
        data,
    };
};

export const setTxBurnSuccess = (data) => {
    return {
        type: TX_BURN_SUCCESS,
        data,
    };
};
