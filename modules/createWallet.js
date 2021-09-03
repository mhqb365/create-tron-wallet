const tronWeb = require("./tronWeb");

async function createWallet() {
  const randomWallet = await tronWeb.createAccount();
  return {
    privateKey: randomWallet.privateKey,
    address: randomWallet.address.base58,
  };
}

module.exports = createWallet;
