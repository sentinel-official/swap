import './index.scss';
import { Provider } from 'react-redux';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
    reducer,
    composeWithDevTools({
        trace: true,
    })(applyMiddleware(thunk)),
);

const getLibrary = (provider) => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;

    return library;
};

const app = (
    <Web3ReactProvider getLibrary={getLibrary}>
        <Provider store={store}>
            <App/>
        </Provider>
    </Web3ReactProvider>
);

ReactDOM.render(app, document.getElementById('root'));
