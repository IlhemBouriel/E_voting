var Web3 = require('web3');
// set provider
if (typeof web3 == "undefined") {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
