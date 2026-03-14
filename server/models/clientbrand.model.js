"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClientBrand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClientBrand.init(
    {
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: DataTypes.STRING,
      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ClientBrand",
      tableName: "client_brands",
    },
  );
  return ClientBrand;
};
