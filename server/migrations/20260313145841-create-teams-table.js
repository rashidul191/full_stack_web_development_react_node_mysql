"use strict";

const { CommonStatus } = require("../constants/enums/CommonStatus.enum");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("teams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
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
      designation: {
        type: Sequelize.STRING,
      },
      serial: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: CommonStatus.Active,
      },
      fb_link: {
        type: Sequelize.STRING,
      },
      twitter_link: {
        type: Sequelize.STRING,
      },
      instagram_link: {
        type: Sequelize.STRING,
      },
      linkedin_link: {
        type: Sequelize.STRING,
      },
      youtube_link: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("teams");
  },
};
