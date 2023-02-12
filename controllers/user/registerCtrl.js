const handleAsync = require('async-error-handler')

const { User } = require('../../models/index')
const responseError = require('../../responses/responseError')
const responseSuccess = require('../../responses/responseSuccess')

const registerUserCtrl = handleAsync(
  async (req, res) => {
    const findUser = await User.find({ email: req.body?.email })

    if (findUser?.length) {
      responseError(res, 409, false, 'User already exists', null)
    }

    const user = await User.create(req.body)

    if (user) {
      responseSuccess(res, 200, true, user)
    } else {
      responseError(res, 409, false, 'Unable to create the user', null)
    }
  },
  (error) => {
    throw new Error(error)
  }
)

module.exports = registerUserCtrl
