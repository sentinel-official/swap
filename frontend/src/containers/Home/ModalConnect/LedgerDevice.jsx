import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import {
    hideConnectModal,
    setConnectLedgerError,
    setConnectLedgerInProgress,
    setConnectLedgerSuccess,
} from '../../../actions/connect';
import { ledgerConnector } from '../../../constants/connectors';
import { useWeb3React } from '@web3-react/core';
import Card from '../../../components/Card';
import LogoLedgerDevice from '../../../assets/LogoLedgerDevice.svg';
import PropTypes from 'prop-types';
import React from 'react';

const LedgerDevice = (props) => {
    const { activate } = useWeb3React();

    const onClick = () => {
        if (props.inProgress) {
            return;
        }

        let onError = false;

        props.setConnectLedgerInProgress();
        activate(ledgerConnector, (error) => {
            onError = true;
            props.setConnectLedgerError(error);
        }, false).then(() => {
            if (onError) {
                return;
            }

            props.setConnectLedgerSuccess();
            props.hideConnectModal(true);
        });
    };

    return (
        <Card
            className="card-ledger-wallet"
            onClick={onClick}>
            <div>
                <img
                    alt="Ledger Device"
                    src={LogoLedgerDevice}
                />
                <p className="ledger-wallet-title">
                    Ledger Device
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

LedgerDevice.propTypes = {
    hideConnectModal: PropTypes.func.isRequired,
    inProgress: PropTypes.bool.isRequired,
    setConnectLedgerError: PropTypes.func.isRequired,
    setConnectLedgerInProgress: PropTypes.func.isRequired,
    setConnectLedgerSuccess: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
    inProgress: state.connect.ledger.inProgress,
});

const actionsToProps = {
    hideConnectModal,
    setConnectLedgerError,
    setConnectLedgerInProgress,
    setConnectLedgerSuccess,
};

export default connect(stateToProps, actionsToProps)(LedgerDevice);
