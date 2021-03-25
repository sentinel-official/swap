import { CONTRACT_ERC20_ADDRESS, CONTRACT_ERC20_DECIMALS, CONTRACT_SWAP_ADDRESS } from '../../../constants/contract';
import { Contract } from '@ethersproject/contracts';
import { connect } from 'react-redux';
import { hideStatusModal } from '../../../actions/status';
import {
    setTxAllowanceError,
    setTxAllowanceInProgress,
    setTxAllowanceSuccess,
    setTxBurnError,
    setTxBurnInProgress,
    setTxBurnSuccess,
} from '../../../actions/tx';
import { useWeb3React } from '@web3-react/core';
import ABI_ERC20 from '../../../constants/ABI.ERC20.json';
import ABI_SWAP from '../../../constants/ABI.SWAP.json';
import AllowanceTxHash from './AllowanceTxHash';
import AllowanceTxStatus from './AllowanceTxStatus';
import Async from 'async';
import BigNumber from 'bignumber.js';
import BurnTxHash from './BurnTxHash';
import BurnTxStatus from './BurnTxStatus';
import Modal from '../../../components/Modal';
import PropTypes from 'prop-types';
import React from 'react';

const ModalStatus = (props) => {
    const {
        account,
        library,
    } = useWeb3React();

    const hideStatusModal = () => {
        if (props.show === false) {
            return;
        }
        if (props.txAllowanceError.message === '' && props.txAllowanceConfirmed === false) {
            return;
        }
        if (props.txBurnError.message === '' && props.txBurnConfirmed === false) {
            return;
        }

        props.hideStatusModal();
    };

    React.useEffect(() => {
        if (props.show === false) {
            return;
        }
        if (!library) {
            return;
        }

        let amount = new BigNumber(props.amount.value);
        amount = amount.multipliedBy(Math.pow(10, CONTRACT_ERC20_DECIMALS));

        const ERC20 = new Contract(CONTRACT_ERC20_ADDRESS, ABI_ERC20, library.getSigner());
        const SWAP = new Contract(CONTRACT_SWAP_ADDRESS, ABI_SWAP, library.getSigner());

        console.log('INIT');
        Async.waterfall([
            (next) => {
                console.log('CHECK_ALLOWANCE: INIT', account, CONTRACT_SWAP_ADDRESS);
                ERC20.allowance(account, CONTRACT_SWAP_ADDRESS)
                    .then((result) => {
                        result = new BigNumber(result.toString());

                        console.log('CHECK_ALLOWANCE: SUCCESS', result.toString());
                        next(null, result);
                    })
                    .catch((error) => {
                        console.log('CHECK_ALLOWANCE: ERROR', error.message);
                        next(error);
                    });
            }, (result, next) => {
                if (result.lt(amount)) {
                    props.setTxAllowanceInProgress();
                    console.log('APPROVE_ALLOWANCE: INIT', amount.toString());

                    ERC20.approve(CONTRACT_SWAP_ADDRESS, amount.toString()).then((result) => {
                        console.log('APPROVE_ALLOWANCE: SUCCESS', result.hash);
                        props.setTxAllowanceSuccess({
                            hash: result.hash,
                            confirmed: false,
                        });

                        next(null, result);
                    }).catch((error) => {
                        console.log('APPROVE_ALLOWANCE: ERROR', error.message);
                        props.setTxAllowanceError(error);

                        next(error);
                    });
                } else {
                    props.setTxAllowanceSuccess({
                        hash: '',
                        confirmed: true,
                    });
                    next(null, null);
                }
            }, (result, next) => {
                if (result) {
                    const { hash } = result;

                    console.log('APPROVE_ALLOWANCE_WAIT: INIT');
                    result.wait(1).then((result) => {
                        console.log('APPROVE_ALLOWANCE_WAIT: SUCCESS');
                        if (result.status === 1) {
                            console.log('APPROVE_ALLOWANCE: SUCCESS');
                            props.setTxAllowanceSuccess({
                                hash,
                                confirmed: true,
                            });

                            next(null, result);
                        } else {
                            const error = new Error('Approve allowance transaction failed');

                            console.log('APPROVE_ALLOWANCE: ERROR', error.message);
                            props.setTxAllowanceError(error);

                            next(error);
                        }
                    }).catch((error) => {
                        console.log('APPROVE_ALLOWANCE_WAIT: ERROR', error.message);
                        props.setTxAllowanceError(error);

                        next(error);
                    });
                } else {
                    next(null, null);
                }
            }, (result, next) => {
                props.setTxBurnInProgress();
                console.log('BURN: INIT', props.toAddress.value, amount.toString());

                SWAP.burn(Buffer.from(props.toAddress.value), amount.toString()).then((result) => {
                    console.log('BURN: SUCCESS', result.hash);
                    props.setTxBurnSuccess({
                        hash: result.hash,
                        confirmed: false,
                    });

                    next(null, result);
                }).catch((error) => {
                    console.log('BURN: ERROR', error.message);
                    props.setTxBurnError(error);

                    next(error);
                });
            }, (result, next) => {
                const { hash } = result;

                console.log('BURN_WAIT: INIT');
                result.wait(1).then((result) => {
                    console.log('BURN_WAIT: SUCCESS');
                    if (result.status === 1) {
                        console.log('BURN: SUCCESS');
                        props.setTxBurnSuccess({
                            hash,
                            confirmed: true,
                        });

                        next(null, result);
                    } else {
                        const error = new Error('Burn transaction failed');

                        console.log('BURN: ERROR', error.message);
                        props.setTxBurnError(error);

                        next(error);
                    }
                }).catch((error) => {
                    console.log('BURN_WAIT: ERROR', error.message);
                    props.setTxBurnError(error);

                    next(error);
                });
            },
        ], () => {
            console.log('DONE');
        });
    }, [props.show]);

    return (
        <Modal
            className="swap-status"
            disableBackdropClick={true}
            disableEscapeKeyDown={true}
            open={props.show}
            title="Swap status"
            onClose={hideStatusModal}>
            <AllowanceTxStatus/>
            <AllowanceTxHash/>
            <BurnTxStatus/>
            <BurnTxHash/>
        </Modal>
    );
};

ModalStatus.propTypes = {
    amount: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.shape({
            message: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    hideStatusModal: PropTypes.func.isRequired,
    inProgress: PropTypes.bool.isRequired,
    setTxAllowanceError: PropTypes.func.isRequired,
    setTxAllowanceInProgress: PropTypes.func.isRequired,
    setTxAllowanceSuccess: PropTypes.func.isRequired,
    setTxBurnError: PropTypes.func.isRequired,
    setTxBurnInProgress: PropTypes.func.isRequired,
    setTxBurnSuccess: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    toAddress: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.shape({
            message: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    txAllowanceConfirmed: PropTypes.bool.isRequired,
    txAllowanceError: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }).isRequired,
    txBurnConfirmed: PropTypes.bool.isRequired,
    txBurnError: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }).isRequired,
};

const stateToProps = (state) => ({
    amount: state.tx.burn.amount,
    inProgress: state.tx.burn.inProgress,
    show: state.status.show,
    toAddress: state.tx.burn.toAddress,
    txAllowanceConfirmed: state.tx.allowance.result.confirmed,
    txAllowanceError: state.tx.allowance.error,
    txBurnConfirmed: state.tx.allowance.result.confirmed,
    txBurnError: state.tx.burn.error,
});

const actionsToProps = {
    hideStatusModal,
    setTxAllowanceError,
    setTxAllowanceInProgress,
    setTxAllowanceSuccess,
    setTxBurnError,
    setTxBurnInProgress,
    setTxBurnSuccess,
};

export default connect(stateToProps, actionsToProps)(ModalStatus);
