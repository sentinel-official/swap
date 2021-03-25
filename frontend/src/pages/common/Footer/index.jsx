import './FAQModal.scss';
import './index.scss';
import Copyright from './Copyright';
import DarkMode from '../../../containers/common/DarkMode';
import FAQButton from '../../../containers/common/FAQButton';
import FAQModal from '../../../containers/common/FAQModal';
import React from 'react';

const Footer = () => {
    return (
        <>
            <FAQModal/>
            <div className="footer">
                <DarkMode/>
                <Copyright/>
                <FAQButton/>
            </div>
        </>
    );
};

export default Footer;
