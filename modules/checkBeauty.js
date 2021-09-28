const fs = require("fs");

const config = require("../config.json");

async function checkBeauty(address) {
  let result = false;
  for (let i = 0; i < config.conditions.length; i++) {
    if (
      String(address.slice(-config.length))
        // .toLowerCase()
        .search(config.conditions[i].trim()) >= 0
    )
      result = true;
  }
  return result;
}

module.exports = checkBeauty;