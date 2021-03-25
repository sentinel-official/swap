import './index.scss';
import HelpOutline from '../../assets/HelpOutline.svg';
import PropTypes from 'prop-types';
import React from 'react';

const Label = ({
    className,
    value,
    help,
}) => {
    return (
        <label className={className}>
            {value}
            {
                help.display
                    ? <span>
                        <img
                            alt="Help"
                            src={HelpOutline}
                            title={help.title}
                        />
                    </span>
                    : null
            }
        </label>
    );
};

Label.propTypes = {
    className: PropTypes.string.isRequired,
    help: PropTypes.shape({
        display: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    value: PropTypes.string.isRequired,
};

export default Label;
