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
router.use("/blog", require("./web/blog.route"));
router.use("/category", require("./web/category.route"));

module.exports = router;
