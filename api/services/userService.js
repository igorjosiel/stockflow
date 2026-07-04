const database = require("../models");
const { hash } = require("bcryptjs");
const { v4, validate } = require("uuid");

class UserService {
    async registerUser(dto) {
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
                id: v4(),
                name: dto.name,
                email: dto.email,
                password: passwordHash
            });

            return newUser;
        } catch (error) {
            throw new Error("Erro ao cadastrar o usuário.");
        }
    }

    async getAllUsers() {
        try {
            const users = await database.users.findAll();

            return users;
        } catch (error) {
            throw new Error("Erro ao buscar os usuários.");
        }
    }

    async getUserById(idUser) {
        if (!idUser || !validate(idUser)) {
            throw new Error("Id inválido.");
        }

        try {
            const user = await database.users.findByPk(idUser);

            if (!user) {
                throw new Error("Usuário não encontrado.");
            }

            return user;
        } catch (error) {
            throw new Error("Erro ao buscar o usuário.");
        }
    }

    async deleteUser(idUser) {
        if (!idUser || !validate(idUser)) {
            throw new Error("Id inválido.");
        }

        try {
            await database.users.destroy({
                where: {
                    id: idUser
                }
            });

            return;
        } catch (error) {
            throw new Error("Erro ao buscar o usuário.");
        }
    }
}

module.exports = UserService;
