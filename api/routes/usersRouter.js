const { Router } = require("express");

const UserController = require("../controllers/userController.js");

const router = Router();

router
    .post("/users", UserController.registerUser)
    .get("/users", UserController.getAllUsers)
    .get("/users/:id")
    .put("/users/:id")
    .delete("/users/:id");

module.exports = router;
