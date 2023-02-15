const handleAsync = require('async-error-handler')

const { User } = require('../../models/index')
const responseError = require('../../responses/responseError')
const responseSuccess = require('../../responses/responseSuccess')

const updateRoleCtrl = handleAsync(
  async (req, res) => {
    const findAdmin = await User.findOne({ email: req.user?.email })

    !findAdmin && responseError(res, 404, false, 'Admin not exists', null)

    findAdmin?.isBlocked &&
      responseError(res, 403, false, 'Unauthorised action', null)

    findAdmin?.role !== 'admin' &&
      responseError(res, 403, false, 'Unauthorized action', null)

    if (findAdmin?.role === 'admin' && findAdmin?.isBlocked === false) {
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
