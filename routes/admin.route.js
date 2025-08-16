const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const articalController = require("../controller/articleController");
const categoriesController = require("../controller/categoryController");
const commentController = require("../controller/commentController");
const settingController = require("../controller/settingController");
// since mounted at /admin, use relative paths:
router.get("/login", userController.loginPage);
router.get("/users", userController.allUser);
router.get("/users/add", userController.addUserPage);
router.post("/users/add", userController.addUser);
router.get("/users/update", userController.updateUserPage);


// articals
router.get("/articals", articalController.index);
router.get("/articals/add", articalController.addArticalPage);
router.get("/articals/update", articalController.updateArticalPage);

// categories
router.get("/categories", categoriesController.categoryPage);
router.get("/categories/add", categoriesController.addCategoryPage);
router.get("/categories/update", categoriesController.updateCategoryPage);

// comments
router.get("/comments", commentController.commentPage);

//settings
router.get("/settings", settingController.settingPage);
module.exports = router;
