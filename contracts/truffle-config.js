const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    networks: {
        license: "MIT",
        development: {
            host: "127.0.0.1",
            port: 9545,
            network_id: "*",
        },
        ropsten: {
            provider: () => {
                return new HDWalletProvider(
                    process.env.PRIVATE_KEY,
                    `wss://ropsten.infura.io/ws/v3/${process.env.INFURA_PROJECT_ID}`,
                )
            },
            network_id: 3,
            confirmations: 2,
        },
    },
    compilers: {
        solc: {
            version: "0.7.6",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                },
            },
        },
    },
};
