const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const errorHandler = require("./middleware/errorHandler");

// middleware
app.use(express.json()); // all data are in json format

app.use(cors());

// file path
app.use(express.static("public"));
app.use("/api/uploads", express.static("public/uploads"));

// Routes
// Web
app.use("/api", require("./routes/web.routes"));
// User
app.use("/api/user", require("./routes/user.routes"));
// Admin
app.use("/api/admin", require("./routes/admin.routes"));

// here we are export model
app.get("/", (req, res) => {
  res.send("server is running...");
});

// Error Handle
app.use(errorHandler);
module.exports = app;
