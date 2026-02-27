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
    // const token = req.headers?.authorization?.split(" ")?.[1];
    if (!token) {
      return res.status(401).json({
        status: "fail",
        error: "You are not a logged in",
        //  error: "UnAuthorized access",
      });
    }

    // const decoded = await promisify(jwt.verify)(
    //   token,
    //   process.env.USER_SECRET_TOKEN
    // );
    // const user = User.findOne({email: decoded.email})
    // req.user = decoded; // user role email = decoded
    // next();
    // jwt verify other way
    // console.log(jwt);
    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
      if (err) {
        return res.status(403).json({
          status: "fail",
          message: "Forbidden access",
        });
      }
      req.user = decoded; // user role email = decoded
      next();
    });
  } catch (error) {
    next("Authentication Failure!");
    return res.status(401).json({
      status: "fail",
      error: "Invalid token",
    });
  }
};

module.exports = checkLogin;
