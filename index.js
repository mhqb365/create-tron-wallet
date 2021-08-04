const TronWeb = require('tronweb')
const HttpProvider = TronWeb.providers.HttpProvider
const fullNode = new HttpProvider('https://api.trongrid.io')
const solidityNode = new HttpProvider('https://api.trongrid.io')
const eventServer = new HttpProvider('https://api.trongrid.io')
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer)
const fs = require('fs')

async function run() {
    let account = await tronWeb.createAccount()
    // console.log(account)
    await fs.appendFileSync('./accounts.txt', `${account.privateKey}\n${account.address.base58}\n\n`, 'utf8')
}

let num = 10

for (var i = 0; i < num; i++) {
    run()
    i == num - 1 ? console.log('Done') : null
}