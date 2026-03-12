const express = require("express");
const router = express.Router();

/*
 * Route Prefix
 * /api/admin _____
 */

// admin atuh routes
router.use("/login", require("./admin/auth/login.route"));
router.use("/register", require("./admin/auth/register.route"));

router.use("/menu", require("./admin/menu.route"));
router.use("/category", require("./admin/category.route"));
router.use("/blog", require("./admin/blog.route"));
router.use("/slider", require("./admin/slider.route"));
router.use("/review", require("./admin/review.route"));
router.use("/business-setting", require("./admin/business.route"));

module.exports = router;
