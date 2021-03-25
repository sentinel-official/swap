import { CONTRACT_ERC20_ADDRESS, CONTRACT_ERC20_DECIMALS } from '../../constants/contract';
import { Contract } from '@ethersproject/contracts';
import { connect } from 'react-redux';
import {
    setAccountEtherBalanceFetchError,
    setAccountEtherBalanceFetchInProgress,
    setAccountEtherBalanceFetchSuccess,
    setAccountTokenBalanceFetchError,
    setAccountTokenBalanceFetchInProgress,
    setAccountTokenBalanceFetchSuccess,
} from '../../actions/account';
import { showConnectModal } from '../../actions/connect';
import { useWeb3React } from '@web3-react/core';
import ABI_ERC20 from '../../constants/ABI.ERC20.json';
import Async from 'async';
import BigNumber from '../../utils/bignumber';
import Button from '../../components/Button';
import PropTypes from 'prop-types';
import React from 'react';

const Connect = (props) => {
    const {
        account,
        active,
        library,
    } = useWeb3React();

    const showConnectModal = () => {
        if (props.show) {
            return;
        }
        if (active) {
            return;
        }

        if (props) {
            props.showConnectModal();
        }
    };

    React.useEffect(() => {
        if (active === false) {
            return;
        }
        if (!account && !library) {
            return;
        }

        const ERC20 = new Contract(CONTRACT_ERC20_ADDRESS, ABI_ERC20, library.getSigner());
        Async.parallel([
            (next) => {
                props.setAccountEtherBalanceFetchInProgress();
                library.getBalance(account)
                    .then((balance) => {
                        balance = balance.toString();
                        balance = new BigNumber(balance);
                        balance = balance.dividedBy(Math.pow(10, 18));
                        props.setAccountEtherBalanceFetchSuccess({
                            balance: balance.toString(),
                        });

                        next(null);
                    })
                    .catch((error) => {
                        props.setAccountEtherBalanceFetchError(error);
                        next(error);
                    });
            }, (next) => {
                props.setAccountTokenBalanceFetchInProgress();
                ERC20.balanceOf(account).then((balance) => {
                    balance = balance.toString();
                    balance = new BigNumber(balance);
                    balance = balance.dividedBy(Math.pow(10, CONTRACT_ERC20_DECIMALS));
                    props.setAccountTokenBalanceFetchSuccess({
                        balance: balance.toString(),
                    });

                    next(null);
                }).catch((error) => {
                    props.setAccountTokenBalanceFetchError(error);
                    next(error);
                });
            },
        ], () => ({}));
    }, [account]);

    const inProgress = (
        props.show ||
        props.accountEtherBalanceFetchInProgress ||
        props.accountTokenBalanceFetchInProgress
    );

    return (
        <Button
            className="button-connect-to-wallet"
            disabled={active}
            inProgress={inProgress}
            value={active ? 'Connected' : 'Connect to Wallet'}
            onClick={showConnectModal}
        />
    );
};

Connect.propTypes = {
    accountEtherBalanceFetchInProgress: PropTypes.bool.isRequired,
    accountTokenBalanceFetchInProgress: PropTypes.bool.isRequired,
    inProgress: PropTypes.bool.isRequired,
    setAccountEtherBalanceFetchError: PropTypes.func.isRequired,
    setAccountEtherBalanceFetchInProgress: PropTypes.func.isRequired,
    setAccountEtherBalanceFetchSuccess: PropTypes.func.isRequired,
    setAccountTokenBalanceFetchError: PropTypes.func.isRequired,
    setAccountTokenBalanceFetchInProgress: PropTypes.func.isRequired,
    setAccountTokenBalanceFetchSuccess: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    showConnectModal: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
    accountEtherBalanceFetchInProgress: state.account.ETHER.inProgress,
    accountTokenBalanceFetchInProgress: state.account.TOKEN.inProgress,
    inProgress: state.connect.inProgress,
    show: state.connect.show,
});

const actionsToProps = {
    setAccountEtherBalanceFetchError,
    setAccountEtherBalanceFetchInProgress,
    setAccountEtherBalanceFetchSuccess,
    setAccountTokenBalanceFetchError,
    setAccountTokenBalanceFetchInProgress,
    setAccountTokenBalanceFetchSuccess,
    showConnectModal,
};

export default connect(stateToProps, actionsToProps)(Connect);
