const jwt = require("jsonwebtoken");
/**
 * 1. check if token exists
 * 2. if not token send res
 * 3. decode the token
 * 4. if valid token then call next() *
 */
const checkLogin = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")?.[1];

    if (!token) {
      return res.status(401).json({
        status: "fail",
        message: "You are not logged in",
      });
    }

    jwt.verify(
      token,
      process.env.JWT_SECRET_KEY || "MERN%RT",
      function (err, decoded) {
        if (err) {
          return res.status(403).json({
            status: "fail",
            message: "Forbidden access",
          });
        }

        req.user = decoded;
        next();
      },
    );
  } catch (error) {
    return res.status(401).json({
      status: "fail",
      message: "Authentication Failure!",
    });
  }
};

module.exports = checkLogin;
