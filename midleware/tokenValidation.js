const constant = require('../constant');
const jwt = require('jsonwebtoken');

module.exports.valodateToekn = (req, res, next) => {
    let response = { ...constant.defaultServerResponse };

    try {
        if (!req.headers.authorization) {
            throw new Error(constant.requestValidationMessage.TOKEN_MISSING);
        }  
        const token = req.headers.authorization;
        jwt.verify(token, process.env.SECRET_KEY || 'my-secret-key')
        return next();

    } catch (error) {
        console.log('error', error);
        response.message = error.message;
        response.status = 401;

    }

    return res.status(response.status).send(response);
    
}