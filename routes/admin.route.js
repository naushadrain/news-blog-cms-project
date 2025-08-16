const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
// const articalController = require("../controller/articalController");
const articalController = require("../controller/articleController");

// since mounted at /admin, use relative paths:
router.get("/login", userController.loginPage);
router.get("/users", userController.allUser);
router.get("/users/add", userController.addUserPage);
router.get("/users/update", userController.updateUserPage);

// router.get("/articals", articalController.index)
// router.get("/articals/add", articalController.addArticalPage)
// router.get("/articals/update", articalController.updateArticalPage)

router.get("/articals", articalController.index);
router.get("/articals/add", articalController.addArticalPage);
router.get("/articals/update", articalController.updateArticalPage);

module.exports = router;
