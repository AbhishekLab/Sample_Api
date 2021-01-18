const Joi = require('@hapi/joi');

module.exports.createCustomerSchema = Joi.object().keys({
    name : Joi.string().required(),
    email : Joi.string().required(),
    phone : Joi.string(),
    photo : Joi.string().required(),
    gender : Joi.string().required()
})

module.exports.getCustomerListSchema = Joi.object().keys({
    skip: Joi.string(),
    limit:Joi.string()
});




