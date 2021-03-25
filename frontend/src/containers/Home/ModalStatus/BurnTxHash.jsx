import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import TxHash from '../../../components/TxHash';

const BurnTxHash = (props) => {
    if (props.hash === '') {
        return null;
    }

    return (
        <TxHash
            className="tx-hash-secondary"
            hash={props.hash}
        />
    );
};

BurnTxHash.propTypes = {
    hash: PropTypes.string.isRequired,
};

const stateToProps = (state) => ({
    hash: state.tx.burn.result.hash,
});

export default connect(stateToProps)(BurnTxHash);
