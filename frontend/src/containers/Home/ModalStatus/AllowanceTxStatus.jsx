import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import TxStatus from '../../../components/TxStatus';

const AllowanceTxStatus = (props) => {
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
            className="tx-status-primary"
            status={status}
        />
    );
};

AllowanceTxStatus.propTypes = {
    confirmed: PropTypes.bool.isRequired,
    error: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }).isRequired,
    inProgress: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
    error: state.tx.allowance.error,
    inProgress: state.tx.allowance.inProgress,
    confirmed: state.tx.allowance.result.confirmed,
});

export default connect(stateToProps)(AllowanceTxStatus);
