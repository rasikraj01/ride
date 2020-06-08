const Joi = require('@hapi/joi');

const bookingValidation = (data) => {
    const schema = Joi.object({
        passengerId: Joi.string().required(),
        carId: Joi.string().required(),
        from : Joi.array().items(Joi.number().required()).required().min(2).max(2),
        to: Joi.array().items(Joi.number().required()).required().min(2).max(2),
    })
    
    const {error} = schema.validate(data);
    return error
}


module.exports.bookingValidation = bookingValidation;