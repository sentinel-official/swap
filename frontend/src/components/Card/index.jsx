import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Card = ({
    className,
    children,
    onClick,
}) => {
    return (
        <div
            className={className}
            onClick={onClick}>
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Card;
