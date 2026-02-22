const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json()); // all data are in json format
app.use(cors());

// User Auth Routes
const loginRoutes = require("./routes/auth/login.route");
app.use("/login", loginRoutes);
const registerRoutes = require("./routes/auth/register.route");
app.use("/register", registerRoutes);

// Web Routes
const blogRoutes = require("./routes/web/blog.route");
// posting to database
// app.use("/api/blogs", blogRoutes);
app.use("/blogs", blogRoutes);

// here we are export model
app.get("/", (req, res) => {
  res.send("server is running...");
});
module.exports = app;
