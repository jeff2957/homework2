const fs = require('fs')
const Web3 = require('web3')

let web3 = new Web3('http://localhost:8545')

const abi = JSON.parse(fs.readFileSync('./contract/Bank_sol_Bank.abi').toString())
const address = fs.readFileSync('./address.txt').toString()

let bank = new web3.eth.Contract(abi, address)

web3.eth.getAccounts().then(function (accounts) {

    // get coin balance
    bank.getBalance(web3.eth.accounts[0], web3.eth.defaultBlock,
        function (error, result) {
            if (error) {
                console.log('Error')
            } esle {
                var balance = web3.fromWei(result, 'coin').toFixed(2);
            }
        }
    );
})