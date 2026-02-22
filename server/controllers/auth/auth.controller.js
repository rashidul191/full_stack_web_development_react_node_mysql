const { User } = require("../../models/index.js");
const bcrypt = require("bcrypt");
const { sendSuccess, sendError } = require("../../utility/response.handle.js");

const {
  indexService,
  createService,
  showService,
  updateService,
  deleteService,
} = require("../../utility/curd.service.js.js");
module.exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user)
      return res.status(401).json({ message: "Invalid username or password" });
    if (user.password !== req.body.password)
      return res.status(401).json({ message: "Invalid username or password" });

    sendSuccess(res, "Successfully found all data!!", data);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};

module.exports.register = async (req, res, next) => {
  try {
    const { username, name, phone, email, password } = req.body;

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

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Create user
    const newUser = {
      username,
      name,
      phone,
      email,
      password: hashedPassword,
      
    };
    // 5️⃣ Remove password from response

    const userResponse = newUser.toJSON();
    delete userResponse.password;

    const data = await createService(User, formBodyData);
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
