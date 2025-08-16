const express = require("express");
const router = express.Router();

// match this path to your actual folder name: "controller" or "controllers"
const siteController = require("../controller/siteController");

// GET /
router.get("/", siteController.index);

module.exports = router;
