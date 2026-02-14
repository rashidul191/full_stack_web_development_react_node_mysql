const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json()); // all data are in json format

const db = require("./models");

// Routes
const blogRoutes = require("./routes/blog");
app.use("/api/blogs", blogRoutes);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
