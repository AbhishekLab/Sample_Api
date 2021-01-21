const Joi = require('@hapi/joi');

module.exports.createBackgroundSchema = Joi.object().keys({
    image : Joi.array().required()
})

module.exports.getBackgroundImageListSchema = Joi.object().keys({
    skip: Joi.string(),
    limit:Joi.string()
});





