const express = require("express");
const app = express();
const cors = require("cors");
// const mysql = require("mysql");
app.use(cors());
app.use(express.json());

// const db = require("./db");

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
