const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json()); // all data are in json format
app.use(cors());

// Routes
const blogRoutes = require("./routes/blog.route");

// here we are export model
app.get("/", (req, res) => {
  res.send("inventory-management-server is running...");
});

// posting to database
// app.use("/api/blogs", blogRoutes);
app.use("/blogs", blogRoutes);

module.exports = app;
