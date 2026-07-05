const { verify, decode } = require("jsonwebtoken");

const jsonSecret = require('../config/jsonSecret');

const validateJwtToken = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send('Token de acesso não informado.');
    }

    const [, accessToken] = token.split(" ");

    try {
        verify(accessToken, jsonSecret.secret);

        const { id, email } = decode(accessToken);

        req.userId = id;
        req.userEmail = email;

        return next();
    } catch (error) {
        res.status(401).send('Usuário não autorizado.');
    }
}

module.exports = validateJwtToken;
