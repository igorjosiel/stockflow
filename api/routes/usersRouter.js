const { Router } = require("express");

const UserController = require("../controllers/userController.js");

const router = Router();

router
    .post("/users", UserController.register)
    .get("/users")
    .get("/users/:id")
    .put("/users/:id")
    .delete("/users/:id");

module.exports = router;
