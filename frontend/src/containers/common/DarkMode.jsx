import Button from '../../components/Button';
import IconDarkMode from '../../assets/DarkMode.svg';
import React from 'react';

const DarkModeIcon = () => {
    return (
        <img
            alt="Dark Mode"
            src={IconDarkMode}
        />
    );
};

const DarkMode = () => {
    return (
        <Button
            className="button-dark-mode"
            disabled={true}
            inProgress={false}
            value={<DarkModeIcon/>}
            onClick={() => ({})}
        />
    );
};

export default DarkMode;
