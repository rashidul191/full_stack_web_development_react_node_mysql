"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContentManage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ContentManage.belongsTo(models.Menu, {
        foreignKey: "menu_id",
        as: "menu",
      });
    }
  }
  ContentManage.init(
    {
      menu_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      slug: {
        type: DataTypes.STRING,
        unique: true,
      },
      short_description: DataTypes.TEXT,
      description: DataTypes.TEXT("long"),
      meta_title: DataTypes.STRING,
      meta_keywords: DataTypes.TEXT("long"),
      meta_description: DataTypes.TEXT("long"),
    },
    {
      sequelize,
      modelName: "ContentManage",
      tableName: "content_manages",
    },
  );
  return ContentManage;
};
