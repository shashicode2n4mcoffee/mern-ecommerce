const handleAsync = require('async-error-handler')

const { User } = require('../../models/index')
const responseError = require('../../responses/responseError')
const responseSuccess = require('../../responses/responseSuccess')

const loginUserCtrl = handleAsync(
  async (req, res) => {
    const findUser = await User.findOne({ email: req.body?.email })
    if (!req.body.email) {
      responseError(res, 400, false, 'Please enter the email credential')
    }

    if (findUser) {
      responseSuccess(res, 200, true, findUser)
    }
    responseError(res, 404, false, 'Unable to find the user', null)
  },
  (error) => {
    throw new Error(error)
  }
)

module.exports = loginUserCtrl
