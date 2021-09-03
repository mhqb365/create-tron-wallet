const createWallet = require("./modules/createWallet");
const fs = require("fs");

const total = Number(process.argv.slice(2)[0]);
let wallets = [];

async function create(length) {
  for (let i = 0; i < length; i++) {
    let wallet = await createWallet();
    wallets.push(wallet);
  }
}

create(total).then(async () => {
  // console.log(wallets);
  await fs.writeFileSync(
    "./wallets/wallet-" + Number(Date.now() / 1e3).toFixed(0) + ".json",
    JSON.stringify(wallets)
  );
  console.log("Done!");
});
