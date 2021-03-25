import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import {
    hideConnectModal,
    setConnectMetaMaskError,
    setConnectMetaMaskInProgress,
    setConnectMetaMaskSuccess,
} from '../../../actions/connect';
import { injectedConnector } from '../../../constants/connectors';
import { useWeb3React } from '@web3-react/core';
import Card from '../../../components/Card';
import LogoMetaMask from '../../../assets/LogoMetaMask.svg';
import PropTypes from 'prop-types';
import React from 'react';

const MetaMask = (props) => {
    const { activate } = useWeb3React();

    const onClick = () => {
        if (props.inProgress) {
            return;
        }

        let onError = false;

        props.setConnectMetaMaskInProgress();
        activate(injectedConnector, (error) => {
            onError = true;
            props.setConnectMetaMaskError(error);
        }, false).then(() => {
            if (onError) {
                return;
            }

            props.setConnectMetaMaskSuccess();
            props.hideConnectModal(true);
        });
    };

    return (
        <Card
            className="card-metamask"
            onClick={onClick}>
            <div>
                <img
                    alt="MetaMask"
                    src={LogoMetaMask}
                />
                <p className="metamask-title">
                    MetaMask
                </p>
                {
                    props.inProgress
                        ? <CircularProgress size="1.5em"/>
                        : null
                }
            </div>
        </Card>
    );
};

MetaMask.propTypes = {
    hideConnectModal: PropTypes.func.isRequired,
    inProgress: PropTypes.bool.isRequired,
    setConnectMetaMaskError: PropTypes.func.isRequired,
    setConnectMetaMaskInProgress: PropTypes.func.isRequired,
    setConnectMetaMaskSuccess: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
    inProgress: state.connect.metamask.inProgress,
});

const actionsToProps = {
    hideConnectModal,
    setConnectMetaMaskError,
    setConnectMetaMaskInProgress,
    setConnectMetaMaskSuccess,
};

export default connect(stateToProps, actionsToProps)(MetaMask);
