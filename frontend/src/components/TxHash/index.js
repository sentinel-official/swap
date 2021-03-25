import './index.scss';
import LogoArrow from '../../assets/Arrow.svg';
import PropTypes from 'prop-types';
import React from 'react';

const TxHash = ({
    className,
    hash,
}) => {
    return (
        <div className={`tx-hash ${className}`}>
            <div className="tx-hash-title">
                Tx Hash:
            </div>
            <div className={`${className}-hash`}>
                {hash}
            </div>
            {
                hash === ''
                    ? null
                    : <div className="tx-hash-link">
                        <a
                            href={`https://etherscan.io/tx/${hash}`}
                            rel="noreferrer"
                            target="_blank">
                            <img
                                alt="Link"
                                src={LogoArrow}/>
                        </a>
                    </div>
            }
        </div>
    );
};

TxHash.propTypes = {
    className: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
};

export default TxHash;
