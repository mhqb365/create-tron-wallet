const TronWeb = require("tronweb");
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
const tronWeb = new TronWeb(fullNode, solidityNode, eventServer);
const fs = require("fs");

const total = Number(process.argv.slice(2)[0]);
let wallets = [];

async function createWallet(length) {
  for (let i = 0; i < length; i++) {
    let randomWallet = await tronWeb.createAccount();
    let wallet = {
      privateKey: randomWallet.privateKey,
      address: randomWallet.address.base58,
    };
    wallets.push(wallet);
  }
}

createWallet(total).then(async () => {
  // console.log(wallets);
  await fs.writeFileSync(
    "./wallets/wallet-" + Number(Date.now() / 1e3).toFixed(0) + ".json",
    JSON.stringify(wallets)
  );
  console.log("Done!");
});
