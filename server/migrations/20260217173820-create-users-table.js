"use strict";
const { Roles } = require("../constants/enums/roles.enum.js");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      avatar: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      role: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: Roles.USER,
      },

      referrer_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "users", // table name
          key: "id", // column name
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },

      // 🔥 IMPORTANT FIX
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("users");
  },
};
