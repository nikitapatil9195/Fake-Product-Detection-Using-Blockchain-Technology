# Fake product detection using blockchain

## Prerequisites

Before starting, make sure you have the following installed:

- [Truffle](https://www.trufflesuite.com/truffle)
- [Ganache](https://truffleframework.com/ganache)
- [Alchemy Platform](https://www.alchemy.com//)
- [Metamask](https://metamask.io/)
- [NodeJs](https://nodejs.org/en/download/current/)

## Setup Steps

```js
    git clone repoUrl .
    npm install
    // start ganache gui, in ganache create your workspace and import private keys of account adderess in metamask for testing and connect them with ganache gui
    truffle compile
    truffle migrate
    npm run dev
```

## Steps to run after any changes

```js
    truffle migrate --reset
    npm run dev
```

## Setting up the Project on Alchemy

1. Sign up for an account on the Alchemy platform and log in.
2. Create a new project and make note of the project ID.
3. In the project settings, set the network to Goerli.

## Getting the MNEMONIC from Metamask

1. Open the Metamask extension in your browser.
2. Go to the `Seed Phrase` section and make note of your 12-word seed phrase (mnemonic).

## Configuring Truffle

1. Create a new Truffle project by running `truffle init`.
2. Update the `truffle-config.js` file with the following:

```js
const HDWalletProvider = require("@truffle/hdwallet-provider");
const projectId = "<Your Alchemy Project ID>";
const mnemonic = "<Your Metamask MNEMONIC>";

module.exports = {
  networks: {
    goerli: {
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `wss://eth-goerli.g.alchemy.com/v2/${PROJECT_ID}`
        ),
      network_id: 5,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
};
```

Make sure to replace `<Your Alchemy Project ID>` and `<Your Metamask MNEMONIC>` with the actual values.

## Deploying the Smart Contract

1. Compile the smart contract using `truffle compile`.
2. Migrate the smart contract to the Goerli network using `truffle migrate --network goerli`.

The smart contract is now deployed on the Goerli Ethereum network and can be interacted with using Alchemy and Metamask.

## Environment Variables

first install dotenv package from npm

```js
    npm install dotenv
```

To run this project, you will need to add the following environment variables to your .env file

`MNEMONIC`

`PROJECT_ID`

## References

- Html5-qrcode docs , https://scanapp.org/blog/

- metamask connection setup with ganache, https://www.youtube.com/watch?v=jLFXONkA4KM

- deploying on goerli testnet , https://www.youtube.com/watch?v=b_k8yDC3hdM&feature=youtu.be
