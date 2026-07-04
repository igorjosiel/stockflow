const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const database = require("../models");
const jsonSecret = require('../config/jsonSecret');

class AuthService {
    async login(dto) {
        const user = await database.users.findOne({
            attributes: ["id", "email", "password"],
            where: {
                email: dto.email
            }
        });

        if (!user) {
            throw new Error("Usuário não cadastrado.");
        }

        const passwordEquals = await compare(dto.password, user.password);

        if (!passwordEquals) {
            throw new Error('Usuário ou senha inválido.');
        }

        const accessToken = sign({
            id: user.id,
            email: user.email
        }, jsonSecret.secret, {
            expiresIn: 60 * 60 * 24 // Equivale a 24 horas
        });

        return { accessToken };
    }
}

module.exports = AuthService;
