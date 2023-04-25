const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sqliteConfig");
class Info extends Model {}

Info.init(
  {
    email: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    comment: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "info"
  }
);

module.exports = Info