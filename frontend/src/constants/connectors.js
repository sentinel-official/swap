import { InjectedConnector } from '@web3-react/injected-connector';
import { LedgerConnector } from '@web3-react/ledger-connector';

export const injectedConnector = new InjectedConnector({
    supportedChainIds: [1],
});

export const ledgerConnector = new LedgerConnector({
    chainId: 1,
    url: 'https://mainnet.infura.io/v3',
    pollingInterval: 12000,
});
