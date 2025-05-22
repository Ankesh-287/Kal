import Joi from 'joi';

export const registerSchema = Joi.object({
  firstname: Joi.string().min(2).max(30).required(),
  lastname: Joi.string().min(2).max(30).required(),
  phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  cpassword: Joi.valid(Joi.ref('password')).required().messages({'any only' : 'Confirm password'})
    .messages({ 'any.only': '{{#label}} does not match password' }),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
