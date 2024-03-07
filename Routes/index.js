const express = require("express");
const router = new express.Router();
const userController = require("../Controllers/userController")

router.post("/createUser", userController.createUser)
router.patch("/user/:id", userController.updateUser)

module.exports = router;
