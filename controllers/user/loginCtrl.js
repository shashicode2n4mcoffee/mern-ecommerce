const handleAsync = require('async-error-handler')

const { User } = require('../../models/index')
const responseError = require('../../responses/responseError')
const responseSuccess = require('../../responses/responseSuccess')
const userDetails = require('../../utils/userDetails')
const validateHashedPassword = require('../../utils/validateHashedPassword')

const loginUserCtrl = handleAsync(
  async (req, res) => {
    const findUser = await User.findOne({ email: req.body?.email })
    if (!req.body.email) {
      responseError(res, 400, false, 'Please enter the email credential')
    }

    if (findUser) {
      const validatePassword = await validateHashedPassword(
        req.body?.password,
        findUser?.password
      )
      validatePassword && responseSuccess(res, 200, true, userDetails(findUser))
      !validatePassword &&
        responseError(res, 401, false, 'Unauthorised User', null)
    } else {
      responseError(res, 404, false, 'Unable to find the user', null)
    }
  },
  (error) => {
    throw new Error(error)
  }
)

module.exports = loginUserCtrl
