const mongoose = require("mongoose");
// const logger = require("./middleware/logger");
const { DB_URL = "mongodb://127.0.0.1:27017/severless-cars" } = process.env;

main().catch((err) => logger.error(err));

async function main() {
  try {
    await mongoose.connect(DB_URL);
    console.log("DB Connected", DB_URL);
  } catch (err) {
    console.log(err);
  }
}

module.exports = main;
