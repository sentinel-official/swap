import Address from './ToAddress';
import Amount from './Amount';
import Connect from './Connect';
import Grid from '../../components/Grid';
import ModalConnect from './ModalConnect';
import ModalStatus from './ModalStatus';
import React from 'react';
import Submit from './Initiate';
import Typography from '../../components/Typography';

const Home = () => {
    return (
        <>
            <ModalConnect/>
            <ModalStatus/>
            <div className="swap">
                <Typography
                    className="title"
                    value="swap"
                />
                <Grid className="grid-swap">
                    <Connect/>
                    <Address/>
                    <Amount/>
                    <Submit/>
                </Grid>
            </div>
        </>
    );
};

export default Home;
