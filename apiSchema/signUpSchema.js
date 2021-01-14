const Joi = require('@hapi/joi');

module.exports.createSignUpSchema = Joi.object().keys({
    email : Joi.string().required(),
    password : Joi.string().required()
})

module.exports.createLogin = Joi.object().keys({
    email : Joi.string().required(),
    password : Joi.string().required()
})

