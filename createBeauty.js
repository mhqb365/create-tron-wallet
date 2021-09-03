const createWallet = require("./modules/createWallet");
const checkBeauty = require("./modules/checkBeauty");
const fs = require("fs");

const fileName = "wallet-" + Number(Date.now() / 1e3).toFixed(0);
fs.writeFileSync("./wallets/" + fileName + ".json", JSON.stringify([]));
let count = 0;

async function createLoop() {
  console.clear();
  count++;
  console.log(count);
  let wallets = require("./wallets/" + fileName + ".json");
  const newWallet = await createWallet();
  let check = await checkBeauty(newWallet.address);
  if (check) wallets.push(newWallet);
  if (wallets.length > 0) {
    await fs.writeFileSync(
      "./wallets/" + fileName + ".json",
      JSON.stringify(wallets)
    );
  }
  createLoop();
}

createLoop();