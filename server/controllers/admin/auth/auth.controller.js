const { Admin } = require("../../../models/index.js");
const bcrypt = require("bcrypt");

const {
  sendSuccess,
  sendError,
} = require("../../../utility/response.handle.js");

const { Roles } = require("../../../constants/enums/Roles.enum.js");

const {
  createService,
  showService,
} = require("../../../utility/curd.service.js");

const { generateToken } = require("../../../utility/jwt-token.js");

const ImageFile = require("../../../lib/ImageFile.js");
const imageHandler = new ImageFile("admins");

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const auth = await Admin.findOne({ where: { email } });

    if (!auth) {
      return sendError(
        res,
        "Authorization failed!",
        { message: "Invalid email or password" },
        401,
      );
    }

    const isMatch = await bcrypt.compare(password, auth.password);

    if (!isMatch) {
      return sendError(
        res,
        "Authorization failed!",
        { message: "Invalid email or password" },
        401,
      );
    }

    const token = generateToken(auth);

    sendSuccess(res, "Admin Login successful", {
      auth,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.register = async (req, res, next) => {
  try {
    const { username, name, phone, email, password, role } = req.body;

    if (!username || !name || !phone || !email || !password) {
      return sendError(res, "All fields are required");
    }

    const existingAuth = await Admin.findOne({
      where: { email },
    });

    if (existingAuth) {
      return sendError(res, "Email already exists");
    }

    const newAuthData = {
      username,
      name,
      phone,
      email,
      password,
      role: role ?? Roles.ADMIN,
      avatar: req.file ? imageHandler.store(req.file) : null,
    };

    const authCreated = await createService(Admin, newAuthData);

    const token = generateToken(authCreated);

    sendSuccess(res, "Successfully create account!!", {
      auth: authCreated,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.show = async (req, res, next) => {
  try {
    const data = await showService(Admin, req.params.id);

    sendSuccess(res, "Successfully found single data!!", data);
  } catch (error) {
    next(error);
  }
};

module.exports.update = (req, res) => {
  res.send("Update admin");
};

module.exports.delete = (req, res) => {
  res.send("Delete admin");
};
