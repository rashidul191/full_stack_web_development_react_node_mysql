"use strict";

const { CommonStatus } = require("../constants/enums/CommonStatus.enum");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("menus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      parent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "menus", // table name
          key: "id", // column name
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      banner_image: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      serial: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: CommonStatus.Active,
      },
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("menus");
  },
};
