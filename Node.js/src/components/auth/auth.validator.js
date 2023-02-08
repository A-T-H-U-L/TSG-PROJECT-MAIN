const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

const options = {
  errors: {
    wrap: {
      label: ''
    }
  }
};
// .pattern(/^[6-9]\d{9}$/)
const validateLogin = (httpRequest) => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .messages({
        'string.pattern.base': 'Provide valid email!'
      }),
    password: Joi.string().min(7).required()
  });
  return schema.validate(httpRequest.body, options);
};

const validateRegistration = (httpRequest) => {
  const schema = Joi.object({
    name:Joi.string().required(),
    email: Joi.string()
    .pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      // .required()
      .messages({
        'string.pattern.base': 'Provide valid email!'
      }),
    password: Joi.string().min(7)
  });
  return schema.validate(httpRequest.body, options);
};


module.exports = {
  validateLogin,
  validateRegistration
};
