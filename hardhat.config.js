//  hardhat.config.js

require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");
//require("hardhat-gas-reporter");

const {privateKeydev,RPC_URLS, etherScanApiKeys} = require('./secrets.json')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers:[
      {
        version:'0.8.7'
      },
      {
        version:'0.8.2'
      },
      {
        version:'0.8.4'
      },
    ]
  },
  networks:{
    hardhat:{},
    rinkeby:{
      url:RPC_URLS.rinkeby,
      accounts: [privateKeydev],
      timeout:400,      
    },    
    amoy:{
      url:RPC_URLS.amoy,
      accounts: [privateKeydev],
      timeout:400
    }
  }
};