import './index.scss';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
    className,
    disabled,
    onClick,
    inProgress,
    value,
}) => {
    return (
        <button
            className={`${className} ${disabled ? ' disabled' : ''}`}
            disabled={disabled}
            onClick={onClick}>
            {
                inProgress
                    ? <CircularProgress
                        color="primary"
                        size="1.5em"
                    />
                    : value
            }
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    inProgress: PropTypes.bool.isRequired,
    value: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
