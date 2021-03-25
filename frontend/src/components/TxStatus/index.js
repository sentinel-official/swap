import './index.scss';
import IconFailed from '../../assets/Failed.svg';
import IconPending from '../../assets/Pending.svg';
import IconSuccess from '../../assets/Success.svg';
import PropTypes from 'prop-types';
import React from 'react';

const TxStatus = ({
    className,
    status,
}) => {
    return (
        <div className={`tx-status ${className}`}>
            <div className="tx-status-title">
                Status:
            </div>
            <div className={`${className + '-' + status}`}>
                {
                    status === 'success'
                        ? <img alt="Success" src={IconSuccess}/>
                        : status === 'failed'
                            ? <img alt="Failed" src={IconFailed}/>
                            : <img alt="Pending" src={IconPending}/>
                }
                {status}
            </div>
        </div>
    );
};

TxStatus.propTypes = {
    className: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};

export default TxStatus;
