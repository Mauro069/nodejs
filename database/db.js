const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://ignfrei:Cat23Cat@test.mimk8th.mongodb.net/";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.exports = db
