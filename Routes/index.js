const express = require("express");
const router = new express.Router();
const userController = require("../Controllers/userController");

router.post("/createUser", userController.createUser);
router.patch("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
