import { connect } from 'react-redux';
import { showStatusModal } from '../../actions/status';
import { useWeb3React } from '@web3-react/core';
import { validateAmount, validateToAddress } from './_validation';
import Button from '../../components/Button';
import PropTypes from 'prop-types';
import React from 'react';

const Initiate = (props) => {
    const { active } = useWeb3React();

    const showStatusModal = () => {
        if (props.show) {
            return;
        }

        props.showStatusModal();
    };

    const disabled = (
        props.inProgress ||
        active === false ||
        validateAmount(props.amount.value).message !== '' ||
        validateToAddress(props.toAddress.value).message !== ''
    );

    return (
        <Button
            className={'button-swap-submit'}
            disabled={disabled}
            inProgress={props.inProgress}
            value="initiate"
            onClick={showStatusModal}
        />
    );
};

Initiate.propTypes = {
    amount: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.shape({
            message: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    inProgress: PropTypes.bool.isRequired,
    show: PropTypes.bool.isRequired,
    showStatusModal: PropTypes.func.isRequired,
    toAddress: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.shape({
            message: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

const stateToProps = (state) => ({
    amount: state.tx.burn.amount,
    inProgress: state.tx.burn.inProgress,
    show: state.status.show,
    toAddress: state.tx.burn.toAddress,
});

const actionsToProps = {
    showStatusModal,
};

export default connect(stateToProps, actionsToProps)(Initiate);
