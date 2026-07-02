const UserService = require("../services/userService");

const userService = new UserService();

class UserController {
    static async registerUser(req, res) {
        const { name, email, password } = req.body;
        
        try {
            const user = await userService.register({ name, email, password });

            res.status(201).send(user);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();

            res.status(200).send(users);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }

    static async getUserById(req, res) {
        const { idUser } = req.params;

        try {
            const user = await userService.getUserById(idUser);

            res.status(200).send(user);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}

module.exports = UserController;
