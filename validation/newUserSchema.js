const yup = require('yup')

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const newUserSchema = yup.object({
  body: yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required,
    password: yup.string().required().min(4).max(100),
    mobile: yup
      .string()
      .required('required')
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'too short')
      .max(10, 'too long'),
  }),
})

module.exports = newUserSchema
