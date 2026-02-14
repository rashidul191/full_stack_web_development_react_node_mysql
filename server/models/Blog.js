module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define(
    "Blog",
    {
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {},
  );
  Blog.associate = function (models) {
    // associations can be defined here
  };
  return Blog;
};
