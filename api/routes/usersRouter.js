const { Router } = require("express");

const UserController = require("../controllers/userController.js");
const validateJwtToken = require('../middlewares/validateJwtToken.js');

const router = Router();

router.use(validateJwtToken);

router
    .get("/users", UserController.getAllUsers)
    .get("/users/:idUser", UserController.getUserById)
    // .put("/users/:id", UserController.updateUser)
    .delete("/users/:idUser", UserController.deleteUser);

module.exports = router;
