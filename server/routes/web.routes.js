const express = require("express");
const router = express.Router();

/*
 * Route Prefix
 * /api _____
 */
// user auth routes
router.use("/login", require("./auth/login.route"));
router.use("/register", require("./auth/register.route"));

// web routes
router.use("/blogs", require("./web/blog.route"));

module.exports = router;
