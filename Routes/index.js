const express = require("express");
const router = new express.Router();
const userController = require("../Controllers/userController");
const authController = require("../Controllers/authController")

router.post("/createUser", userController.createUser);
router.patch("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.post("/register", authController.register)
router.post("/login", authController.login)

module.exports = router;
