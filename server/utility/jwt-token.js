const jwt = require("jsonwebtoken");

module.exports.generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: "10d", // 2day
  });

  // res.cookie("access-token", token, {
  //   httpOnly: true,
  // });

  return token;
};
