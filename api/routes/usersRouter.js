const { Router } = require("express");

const UserController = require("../controllers/userController.js");

const router = Router();

router
    .post("/users", UserController.registerUser)
    .get("/users", UserController.getAllUsers)
    .get("/users/:idUser", UserController.getUserById)
    // .put("/users/:id", UserController.updateUser)
    .delete("/users/:idUser", UserController.deleteUser);

module.exports = router;
