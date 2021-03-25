import './index.scss';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Home from '../../containers/Home';
import React from 'react';
import Snackbar from '../../containers/common/Snackbar';

const Page = () => {
    return (
        <>
            <Snackbar/>
            <Header/>
            <Home/>
            <Footer/>
        </>
    );
};

export default Page;
