const handleAsync = require('async-error-handler')
const { BlackList } = require('../models')
const responseError = require('../responses/responseError')

const tokenValidation = handleAsync(
  async (req, res, next) => {
    const token = req.header('auth-token')
    const blackListToken = await BlackList.findOne({ token: token })
    console.log('BLACK LIST TOKE IN MIDDLEWARE : ', blackListToken)

    blackListToken && responseError(res, 403, false, 'Unauthorised user', null)
    if (!blackListToken) {
      next()
    }
  },
  (error) => {
    throw new Error(error)
  }
)

module.exports = tokenValidation
