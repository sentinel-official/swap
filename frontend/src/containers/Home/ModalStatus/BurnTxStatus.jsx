import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import TxStatus from '../../../components/TxStatus';

const BurnTxStatus = (props) => {
    let status;
    switch (true) {
    case props.error.message !== '':
        status = 'failed';
        break;
    case props.confirmed:
        status = 'success';
        break;
    case props.inProgress:
    case props.confirmed === false:
        status = 'pending';
        break;
    default:
        status = 'unknown';
        break;
    }

    if (status === 'unknown') {
        return null;
    }

    return (
        <TxStatus
            className="tx-status-secondary"
            status={status}
        />
    );
};

BurnTxStatus.propTypes = {
    confirmed: PropTypes.bool.isRequired,
    error: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }).isRequired,
    inProgress: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
    confirmed: state.tx.burn.result.confirmed,
    error: state.tx.burn.error,
    inProgress: state.tx.burn.inProgress,
});

export default connect(stateToProps)(BurnTxStatus);
