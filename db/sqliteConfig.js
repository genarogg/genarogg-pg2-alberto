const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  host: "./db/db.sqlite",
});

module.exports = sequelize;
