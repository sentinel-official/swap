import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';

const TxMessage = ({
    message,
    status,
}) => {
    return (
        <div className={`tx-message tx-message-${status}`}>
            {message} !
        </div>
    );
};

TxMessage.propTypes = {
    message: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};

export default TxMessage;
