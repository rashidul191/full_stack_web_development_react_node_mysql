const {Model} = require('sequelize');
const { Roles } = require("../constants/enums/roles.enum.js");
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      role: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: Roles.NONE,
        validate: {
          isIn: [Object.values(Roles)],
        },
      },
    },
    {
      tableName: "admins",
      timestamps: true, // createdAt, updatedAt
    },
  );

  return Admin;
};
