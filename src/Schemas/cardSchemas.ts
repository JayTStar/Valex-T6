import Joi from "joi"

export const createCard = Joi.object({
    employeeId: Joi.number().required(),
    type: Joi.string().valid("groceries", "restaurants", "transport", "education", "health").required()
});

export const activateCard = Joi.object({
    cvc: Joi.string().length(3).required(),
    password: Joi.string().length(4).pattern(/[0-9]{4}/).required(),
});

export const cardPassword = Joi.object({
    password: Joi.string().length(4).pattern(/[0-9]{4}/).required()
});
