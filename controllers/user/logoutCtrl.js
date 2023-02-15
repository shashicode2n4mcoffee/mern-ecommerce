const handleAsync = require('async-error-handler')
const { BlackList } = require('../../models')
const responseError = require('../../responses/responseError')
const responseSuccess = require('../../responses/responseSuccess')

const logoutCtrl = handleAsync(async (req, res) => {
  const token = req.header('auth-token')

  const blackListToken = await BlackList({ token })
  console.log('BLACK LIST TOKEN : ', blackListToken)

  if (blackListToken) {
    res.header('auth-token', null)
    responseSuccess(res, 200, true, 'Successfully logged out')
  } else responseError(res, 409, false, 'Unbale to logout', null)
})

module.exports = logoutCtrl
