import { connect } from 'react-redux';
import { hideConnectModal } from '../../../actions/connect';
import MetaMask from './MetaMask';
import Modal from '../../../components/Modal';
import PropTypes from 'prop-types';
import React from 'react';

const ModalConnect = (props) => {
    const hideConnectModal = () => {
        if (props.show === false) {
            return;
        }

        props.hideConnectModal();
    };

    return (
        <Modal
            className="wallets"
            disableBackdropClick={false}
            disableEscapeKeyDown={false}
            open={props.show}
            title="Select wallet"
            onClose={hideConnectModal}>
            <MetaMask/>
        </Modal>
    );
};

ModalConnect.propTypes = {
    hideConnectModal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
    show: state.connect.show,
});

const actionsToProps = {
    hideConnectModal,
};

export default connect(stateToProps, actionsToProps)(ModalConnect);
