import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';

const Typography = ({
    className,
    value,
}) => {
    return (
        <p className={className}>
            {value}
        </p>
    );
};

Typography.propTypes = {
    className: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default Typography;
