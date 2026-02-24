const { User } = require("../../models/index.js");
const bcrypt = require("bcrypt");
const { sendSuccess, sendError } = require("../../utility/response.handle.js");

const { Roles } = require("../../constants/enums/roles.enum.js");

const ImageField = require("../../lib/Image");
const imageHandler = new ImageField("users", "images/no-image.png");

const {
  indexService,
  createService,
  showService,
  updateService,
  deleteService,
} = require("../../utility/curd.service.js");
module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // 1️⃣ Find user by username
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return sendError(res, "Invalid username or password");
    }

    // 2️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return sendError(res, "Invalid username or password");
    }

    // 4️⃣ Send success response
    sendSuccess(res, "Login successful", user);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};

module.exports.register = async (req, res, next) => {
  try {

    const { avatar, username, name, phone, email, password, role } = req.body;

    // 1️⃣ Basic validation
    if (!username || !name || !phone || !email || !password) {
      return sendError(res, "All fields are required");
    }

    // 2️⃣ Check if user already exists (username or email)
    const existingUser = await User.findOne({
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
      role: role ?? Roles.USER,
      avatar: req.file ? req.file.path : null,
      // avatar: req.file ? imageHandler.storeFile(req.file) : null,
    };

    const data = await createService(User, newUserData);
    // console.log(userResponse, newUserData);
    sendSuccess(res, "Successfully create account!!", data);
  } catch (error) {
    next();
    sendError(res, "Can't create data!!", error);
  }
};

module.exports.show = async (req, res) => {
  try {
    // const data = await Blog.findByPk(req.params.id);
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
