"use strict";
const { Model } = require("sequelize");
const { CommonStatus } = require("../constants/enums/CommonStatus.enum");
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 🔹 A menu belongs to a menu
      Menu.belongsTo(models.Menu, {
        foreignKey: "parent_id",
        as: "parent",
      });

      // 🔹 A menu can have many menus
      Menu.hasMany(models.Menu, {
        foreignKey: "parent_id",
        as: "children",
      });

      // 🔹 A menu can have many ContentManage
      Menu.hasMany(models.ContentManage, {
        foreignKey: "menu_id",
        as: "posts",
      });
    }
  }
  Menu.init(
    {
      parent_id: DataTypes.INTEGER,
      banner_image: DataTypes.STRING,
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      serial: DataTypes.TINYINT,
      status: {
        type: DataTypes.TINYINT,
        defaultValue: CommonStatus.ACTIVE,
        validate: {
          isIn: [Object.values(CommonStatus)],
        },
      },
    },
    {
      sequelize,
      modelName: "Menu",
      tableName: "menus",
    },
  );
  return Menu;
};
