const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const provider = new HDWalletProvider(
'perfect trash ill size keen snake copy cable material cliff paddle spirit',
'https://rinkeby.infura.io/v3/be1ab40c8be74ba281d7c3ec9bb37626'
);
const web3 = new Web3(provider);
const deploy = async () => {
   const accounts = await web3.eth.getAccounts();
   console.log('try to deploy', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
 .deploy({ data: '0x' + bytecode, arguments: ['Hi there']})
  .send({ gas:'1000000', from: accounts[0] });

   console.log('Contract deployed to', result.options.address);

};

deploy();
