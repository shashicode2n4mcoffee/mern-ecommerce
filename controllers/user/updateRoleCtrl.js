const handleAsync = require('async-error-handler')

const { User } = require('../../models/index')
const responseError = require('../../responses/responseError')
const responseSuccess = require('../../responses/responseSuccess')

const updateRoleCtrl = handleAsync(
  async (req, res) => {
    const findUser = await User.findOne({ email: req.body?.email })

    !findUser && responseError(res, 404, false, 'User not exists', null)

    findUser?.role !== 'admin' &&
      responseError(res, 403, false, 'Unauthorized action', null)

    if (findUser?.role === 'admin') {
      const updatedUserRole = await User.findOneAndUpdate(
        { email: req.body?.email },
        { role: req.body?.role },
        { new: true }
      )

      updatedUserRole
        ? responseSuccess(res, 200, true, updatedUserRole)
        : responseError(res, 500, false, 'Unable to update the role', null)
    }
  },
  (error) => {
    throw new Error(error)
  }
)

module.exports = updateRoleCtrl
