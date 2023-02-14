const yup = require('yup')

const updateRoleSchema = yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    role: yup.string().required(),
  }),
})

module.exports = updateRoleSchema
