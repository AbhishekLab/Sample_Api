const Joi = require('@hapi/joi');

module.exports.createCustomerSchema = Joi.object().keys({
    name : Joi.string().required(),
    email : Joi.number().required(),
    like : Joi.string().required(),
    photo : Joi.string().required(),
    gender : Joi.string().required(),
    age : Joi.number().required(),
})

module.exports.getCustomerListSchema = Joi.object().keys({
    skip: Joi.string(),
    limit:Joi.string()
});




