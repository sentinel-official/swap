import { ACCOUNT_ETHER_BALANCE_FETCH_ERROR, ACCOUNT_TOKEN_BALANCE_FETCH_ERROR } from '../constants/account';
import { CONNECT_LEDGER_ERROR, CONNECT_METAMASK_ERROR } from '../constants/connect';
import { SNACKBAR_HIDE, SNACKBAR_SHOW } from '../constants/snackbar';
import { TX_ALLOWANCE_ERROR, TX_BURN_ERROR } from '../constants/tx';
import { capitalizeFirstLetter } from '../utils/string';

const _ = (state = {
    open: false,
    message: '',
}, {
    type,
    data,
}) => {
    switch (type) {
    case SNACKBAR_SHOW:
    case CONNECT_LEDGER_ERROR:
    case CONNECT_METAMASK_ERROR:
    case ACCOUNT_ETHER_BALANCE_FETCH_ERROR:
    case ACCOUNT_TOKEN_BALANCE_FETCH_ERROR:
    case TX_ALLOWANCE_ERROR:
    case TX_BURN_ERROR:
        return {
            ...state,
            open: true,
            message: capitalizeFirstLetter(data.message),
        };
    case SNACKBAR_HIDE:
        return {
            ...state,
            open: false,
            message: '',
        };
    default:
        return state;
    }
};

export default _;
