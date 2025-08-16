const userModel = require("../models/Users.model");
const { body, validationResult } = require('express-validator');

// /admin/login
const loginPage = async (req, res) => {
    res.render("admin/login", { title: "Admin Login", layout: false });
};

// /admin/users/add
const addUserPage = async (req, res) => {
    res.render("admin/users/add-user", { title: "Add User" });
};

// /admin/users/update
const updateUserPage = async (req, res) => {
    res.render("admin/users/update-user", { title: "Update User" });
};

// stubs
const allUser = async (req, res) => {
    res.render("admin/users/users", { title: "Users" });
};
const addUser = async (req, res) => {
    const { username, password, email } = req.body;
    const newUser = new userModel({ username, password, email });
    await newUser.save();
    res.redirect("/admin/users");
};
const updateUser = async (req, res) => { };
const deleteUser = async (req, res) => { };

module.exports = {
    loginPage,
    allUser,
    addUserPage,
    addUser,
    updateUserPage,
    updateUser,
    deleteUser,
};
