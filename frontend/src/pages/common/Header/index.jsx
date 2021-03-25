import './index.scss';
import LogoSentinelSwap from '../../../assets/LogoSentinelSwap.svg';
import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <img
                alt="Sentinel swap"
                className="logo"
                src={LogoSentinelSwap}/>
        </div>
    );
};

export default Header;
