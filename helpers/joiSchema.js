const Joi = require("joi");

const cardSchema = Joi.object({
  title: Joi.string().min(3).max(40),
});
const userSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(6),
});
module.exports = { cardSchema, userSchema };
