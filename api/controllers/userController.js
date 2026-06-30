const UserService = require("../services/userService");

const userService = new UserService()

class UserController {
    static async register(req, res) {
        const { name, email, password } = req.body;
        
        try {
            const user = await userService.register({ name, email, password });

            res.status(201).send(user);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}

module.exports = UserController;
