import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import TxHash from '../../../components/TxHash';

const AllowanceTxHash = (props) => {
    if (props.hash === '') {
        return null;
    }

    return (
        <TxHash
            className="tx-hash-primary"
            hash={props.hash}
        />
    );
};

AllowanceTxHash.propTypes = {
    hash: PropTypes.string.isRequired,
};

const stateToProps = (state) => ({
    hash: state.tx.allowance.result.hash,
});

export default connect(stateToProps)(AllowanceTxHash);
