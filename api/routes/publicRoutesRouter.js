const { Router } = require('express');

const AuthController = require("../controllers/authController.js");
const UserController = require("../controllers/userController.js");

const router = Router();

router
    .post("/auth/login", AuthController.login)
    .post("/users", UserController.registerUser);

module.exports = router;
