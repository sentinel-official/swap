import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';

const TextInput = ({
    className,
    onChange,
    placeholder,
    value,
}) => {
    return (
        <input
            className={className}
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={onChange}
        />
    );
};

TextInput.propTypes = {
    className: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TextInput;
