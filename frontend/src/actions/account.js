import {
    ACCOUNT_ETHER_BALANCE_FETCH_ERROR,
    ACCOUNT_ETHER_BALANCE_FETCH_IN_PROGRESS,
    ACCOUNT_ETHER_BALANCE_FETCH_SUCCESS,
    ACCOUNT_TOKEN_BALANCE_FETCH_ERROR,
    ACCOUNT_TOKEN_BALANCE_FETCH_IN_PROGRESS,
    ACCOUNT_TOKEN_BALANCE_FETCH_SUCCESS,
} from '../constants/account';

export const setAccountEtherBalanceFetchInProgress = (data) => {
    return {
        type: ACCOUNT_ETHER_BALANCE_FETCH_IN_PROGRESS,
        data,
    };
};

export const setAccountEtherBalanceFetchError = (data) => {
    return {
        type: ACCOUNT_ETHER_BALANCE_FETCH_ERROR,
        data,
    };
};

export const setAccountEtherBalanceFetchSuccess = (data) => {
    return {
        type: ACCOUNT_ETHER_BALANCE_FETCH_SUCCESS,
        data,
    };
};

export const setAccountTokenBalanceFetchInProgress = (data) => {
    return {
        type: ACCOUNT_TOKEN_BALANCE_FETCH_IN_PROGRESS,
        data,
    };
};

export const setAccountTokenBalanceFetchError = (data) => {
    return {
        type: ACCOUNT_TOKEN_BALANCE_FETCH_ERROR,
        data,
    };
};

export const setAccountTokenBalanceFetchSuccess = (data) => {
    return {
        type: ACCOUNT_TOKEN_BALANCE_FETCH_SUCCESS,
        data,
    };
};
