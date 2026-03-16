const { User } = require("../../models/index.js");
const bcrypt = require("bcrypt");

const { sendSuccess, sendError } = require("../../utility/response.handle.js");
const { Roles } = require("../../constants/enums/Roles.enum.js");
const { generateToken } = require("../../utility/jwt-token.js");

const ImageFile = require("../../lib/ImageFile.js");
const imageHandler = new ImageFile("users");

const {
  createService,
  showService,
  updateService,
} = require("../../utility/curd.service.js");

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const auth = await User.findOne({ where: { email } });

    if (!auth) {
      return sendError(
        res,
        "Authorization failed!",
        {
          message: "Invalid email or password",
        },
        401,
      );
    }

    const isMatch = await bcrypt.compare(password, auth.password);

    if (!isMatch) {
      return sendError(
        res,
        "Authorization failed!",
        {
          message: "Invalid email or password",
        },
        401,
      );
    }

    const token = generateToken(auth);

    const { password: _, ...user } = auth.toJSON();

    sendSuccess(res, "Login successful", { user, token });
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

    const existingAuth = await User.findOne({ where: { email } });

    if (existingAuth) {
      return sendError(res, "User already exists");
    }

    const newAuthData = {
      username,
      name,
      phone,
      email,
      password,
      role: role ?? Roles.USER,
      avatar: req.file ? imageHandler.store(req.file) : null,
    };

    const authCreated = await createService(User, newAuthData);

    const token = generateToken(authCreated);

    const { password: _, ...user } = authCreated.toJSON();

    sendSuccess(res, "Successfully create account!!", {
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.show = async (req, res, next) => {
  try {
    const data = await showService(User, req.params.id);

    sendSuccess(res, "Successfully found single data!!", data);
  } catch (error) {
    next(error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { username, name, phone, email, password, role } = req.body;

    const existingUser = await User.findByPk(userId);

    if (!existingUser) return sendError(res, "User not found!!");

    if (email && email !== existingUser.email) {
      const emailCheck = await User.findOne({ where: { email } });
      if (emailCheck) return sendError(res, "Email already exists!!");
    }

    if (username && username !== existingUser.username) {
      const usernameCheck = await User.findOne({ where: { username } });
      if (usernameCheck) return sendError(res, "Username already exists!!");
    }

    const updateData = {
      username: username ?? existingUser.username,
      name: name ?? existingUser.name,
      phone: phone ?? existingUser.phone,
      email: email ?? existingUser.email,
      role: role ?? existingUser.role,
    };

    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
    }

    if (req.file) {
      imageHandler.delete(existingUser.avatar);
      updateData.avatar = imageHandler.store(req.file);
    }

    const updatedUser = await updateService(User, userId, updateData);

    sendSuccess(res, "User updated successfully!!", updatedUser);
  } catch (error) {
    next(error);
  }
};

module.exports.delete = (req, res) => {
  res.send("Delete user");
};
