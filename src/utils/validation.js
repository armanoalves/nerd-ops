const Joi = require('joi');

//Validation schema for the request body

const registerValidator = (data) => {
    const schema = Joi.object({
        usuario: Joi.string()
            .min(3)
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        senha: Joi.string()
            .min(6)
            .required()
    });
    return schema.validate(data);
}

const loginValidator = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        senha: Joi.string()
            .min(6)
            .required()
    });
    return schema.validate(data);
}

module.exports.registerValidator = registerValidator;
module.exports.loginValidator = loginValidator;