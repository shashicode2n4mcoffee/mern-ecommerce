const yup = require('yup')

const loginUserSchema = yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(4).max(100),
  }),
})

module.exports = loginUserSchema
