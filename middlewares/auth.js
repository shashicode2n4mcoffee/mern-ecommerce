const handleAsync = require('async-error-handler')
const jwt = require('jsonwebtoken')
const { User } = require('../models')
const responseError = require('../responses/responseError')

const auth = handleAsync(
  async (req, res, next) => {
    const jwtToken = req.header('auth-token')
    !jwtToken && responseError(res, 401, false, 'Unauthorised user', null)

    if (jwtToken) {
      const verifiedUser = jwt.verify(jwtToken, process.env.JWT_SECRET)
      const user = await User.findById(verifiedUser?._id)
      req.user = user
      next()
    }
  },
  (error) => {
    throw new Error(error)
  }
)

module.exports = auth
