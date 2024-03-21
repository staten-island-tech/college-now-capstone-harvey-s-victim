const express = require("express");
const router = new express.Router();
const userController = require("../Controllers/userController");
const authController = require("../Controllers/authController");
const roomController = require("../Controllers/roomController");
const multer = require("../Middleware/upload");

router.post("/createUser", userController.createUser);
router.patch("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.post("/register", multer.send, authController.register);
router.post("/login", authController.login);
router.get("/protected", authController.authCheck, authController.protected);
router.post("/createRoom", roomController.createRoom)
// router.post create room
// router.post save to leaderboard
// router.patch connect to room
// router.delete delete room

module.exports = router;
