var product = artifacts.require("product");

module.exports = function (deployer) {
  deployer.deploy(product);
};

//Deployed on goerli testnet

// C:Desktop\Full Working\ant-main-Dev>truffle migrate --network goerli --reset

// Compiling your contracts...
// ===========================
// > Compiling .\contracts\product.sol
// > Artifacts written to C:\Desktop\Full Working\ant-main-Dev\build\contracts
// > Compiled successfully using:
//    - solc: 0.8.12+commit.f00d7308.Emscripten.clang

// Starting migrations...
// ======================
// > Network name:    'goerli'
// > Network id:      5
// > Block gas limit: 30000000 (0x1c9c380)

// 1_deploy_product.js
// ===================

//    Deploying 'product'
//    -------------------
//    > transaction hash:    0xcbbf524d73aac898c49ab9d5713aac5485542e4ebbbb451b55b00b26dbb0670f
//    > Blocks: 0            Seconds: 8
//    > contract address:    0x85F6B96b96F05F07F52AA39fE985a6ca6D5fF82B
//    > block number:        8637197
//    > block timestamp:     1678551312
//    > account:             0xB2B3Af115112d7352aE643e140D879BaEA37b916
//    > balance:             0.642181321159192099
//    > gas used:            2002105 (0x1e8cb9)
//    > gas price:           31.576147996 gwei
//    > value sent:          0 ETH
//    > total cost:          0.06321876378353158 ETH

//    Pausing for 2 confirmations...

//    -------------------------------
//    > confirmation number: 1 (block: 8637198)
//    > confirmation number: 2 (block: 8637199)
//    > Saving artifacts
//    -------------------------------------
//    > Total cost:     0.06321876378353158 ETH

// Summary
// =======
// > Total deployments:   1
// > Final cost:          0.06321876378353158 ETH
