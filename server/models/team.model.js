"use strict";
const { Model } = require("sequelize");
const { CommonStatus } = require("../constants/enums/CommonStatus.enum");
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Team.init(
    {
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      designation: DataTypes.STRING,
      serial: DataTypes.INTEGER,
      status: {
        type: DataTypes.INTEGER,
        defaultValue: CommonStatus.Active,
        validate: {
          isIn: [Object.values(CommonStatus)],
        },
      },
      fb_link: DataTypes.STRING,
      twitter_link: DataTypes.STRING,
      instagram_link: DataTypes.STRING,
      linkedin_link: DataTypes.STRING,
      youtube_link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Team",
      tableName: "teams",
    },
  );
  return Team;
};
