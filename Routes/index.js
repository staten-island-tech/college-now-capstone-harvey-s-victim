const express = require("express");
const router = new express.Router();
const userController = require("../Controllers/userController");
const authController = require("../Controllers/authController");
const multer = require("../Middleware/upload");

router.post("/createUser", userController.createUser);
router.patch("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.post("/register", multer.send, authController.register);
router.post("/login", authController.login);
router.get("/protected", authController.authCheck, authController.protected);
router.get("/ranking", userController.getRanking);

module.exports = router;
