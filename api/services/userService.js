const database = require("../models");
const { hash } = require("bcryptjs");
const uuid = require("uuid");

class UserService {
    async register(dto) {
        const user = await database.users.findOne({
            where: {
                email: dto.email
            }
        });

        if (user) {
            throw new Error("Usuário já cadastrado");
        }

        try {
            const passwordHash = await hash(dto.password, 8);

            const newUser = await database.users.create({
                id: uuid.v4(),
                name: dto.name,
                email: dto.email,
                password: passwordHash
            });

            return newUser;
        } catch (error) {
            throw new Error("Erro ao cadastrar o usuário.");
        }
    }
}

module.exports = UserService;
