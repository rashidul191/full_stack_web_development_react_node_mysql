const { Admin } = require("../../../models/index.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  sendSuccess,
  sendError,
} = require("../../../utility/response.handle.js");

const { Roles } = require("../../../constants/enums/roles.enum.js");

const {
  indexService,
  createService,
  showService,
  updateService,
  deleteService,
} = require("../../../utility/curd.service.js");

module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // 1️⃣ Find user by username
    const user = await Admin.findOne({ where: { username } });

    if (!user) {
      return sendError(
        res,
        "Authorization failed!",
        (error = { message: "Invalid username or password" }),
        (statusCode = 401),
      );
    }

    // 2️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return sendError(
        res,
        "Authorization failed!",
        (error = { message: "Invalid username or password" }),
        (statusCode = 401),
      );
    }

    // console.log(process.env.JWT_SECRET_KEY);

    // Generate JWT Token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "2d", // 2day
      },
    );

    res.cookie("access-token", token, {
      httpOnly: true,
    });

    // 4️⃣ Send success response
    sendSuccess(res, "Admin Login successful", { "access-token": token });
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};

module.exports.register = async (req, res, next) => {
  try {
    // console.log(Roles.ADMIN);
    const { username, name, phone, email, password, role } = req.body;

    // 1️⃣ Basic validation
    if (!username || !name || !phone || !email || !password) {
      return sendError(res, "All fields are required");
    }

    // 2️⃣ Check if user already exists (username or email)
    const existingUser = await Admin.findOne({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return sendError(res, "Email already exists");
    }

    // 3️⃣  Create user
    const newUserData = {
      username,
      name,
      phone,
      email,
      password, // password hash form model
      role: role ?? Roles.ADMIN,
    };

    const data = await createService(User, newUserData);
    sendSuccess(res, "Successfully create account!!", data);
  } catch (error) {
    next();
    sendError(res, "Can't create data!!", error);
  }
};

module.exports.show = async (req, res) => {
  try {
    const data = await showService(Blog, req.params.id);
    sendSuccess(res, "Successfully found single data!!", data);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};

module.exports.update = (req, res) => {
  res.send("Update blog");
};

module.exports.delete = (req, res) => {
  res.send("Delete blog");
};
