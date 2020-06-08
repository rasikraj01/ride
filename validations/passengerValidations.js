const Joi = require('@hapi/joi');

const passengerRegisterValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        currentLocation : Joi.array().items(Joi.number().required()).required().min(2).max(2),
    })
    
    const {error} = schema.validate(data);
    return error
}


module.exports.passengerRegisterValidation = passengerRegisterValidation;