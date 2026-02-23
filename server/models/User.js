const { Model } = require("sequelize");
const bcrypt = require("bcrypt"); // for password
const { Roles } = require("../constants/enums/roles.enum.js");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}

    async comparePassword(password) {
      return await bcrypt.compare(password, this.password);
    }

    toJSON() {
      const values = { ...this.get() };
      delete values.password;
      return values;
    }
  }

  User.init(
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
        unique: true,
        validate: { isEmail: true },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      avatar: {
        type: DataTypes.STRING,
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
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: true,
      hooks: {
        beforeCreate: async (user) => {
          user.password = await bcrypt.hash(user.password, 10);
        },
        beforeUpdate: async (user) => {
          if (user.changed("password")) {
            user.password = await bcrypt.hash(user.password, 10);
          }
        },
      },
    },
  );

  return User;
};
