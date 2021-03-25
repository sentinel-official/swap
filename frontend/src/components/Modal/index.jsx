import './index.scss';
import CloseIcon from '@material-ui/icons/Close';
import CoreModal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import React from 'react';

const Modal = ({
    children,
    className,
    disableBackdropClick,
    disableEscapeKeyDown,
    open,
    title,
    onClose,
}) => {
    return (
        <CoreModal
            className="modal"
            disableBackdropClick={disableBackdropClick}
            disableEscapeKeyDown={disableEscapeKeyDown}
            open={open}
            onClose={onClose}>
            <div className={className}>
                <div className="title-bar">
                    <div className="btn-close">
                        <button onClick={onClose}>
                            <CloseIcon/>
                        </button>
                    </div>
                    <div className="modal-title">
                        {title}
                    </div>
                </div>
                <div className="children">
                    {children}
                </div>
            </div>
        </CoreModal>
    );
};

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string.isRequired,
    disableBackdropClick: PropTypes.bool.isRequired,
    disableEscapeKeyDown: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
