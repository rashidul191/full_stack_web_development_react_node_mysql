const { Model } = require("sequelize");
const bcrypt = require("bcrypt"); // for password
const { Roles } = require("../constants/enums/Roles.enum");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // 🔹 A user belongs to a referrer
      User.belongsTo(models.User, {
        foreignKey: "referrer_id",
        as: "referrer",
      });

      // 🔹 A user can have many referrals
      User.hasMany(models.User, {
        foreignKey: "referrer_id",
        as: "referrals",
      });
    }

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
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: Roles.User,
        validate: {
          isIn: [Object.values(Roles)],
        },
      },

      referrer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "User",
      tableName: "users",
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
