import './index.scss';
import CoreGrid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';

const Grid = ({
    className,
    children,
}) => {
    return (
        <CoreGrid
            container
            item
            alignItems="center"
            direction="column"
            justify="center"
            wrap="nowrap">
            <CoreGrid
                item
                className={className}>
                {children}
            </CoreGrid>
        </CoreGrid>
    );
};

Grid.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string.isRequired,
};

export default Grid;
