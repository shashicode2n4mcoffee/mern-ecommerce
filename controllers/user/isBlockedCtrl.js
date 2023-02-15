const handleAsync = require('async-error-handler')

const { User } = require('../../models/index')
const responseError = require('../../responses/responseError')
const responseSuccess = require('../../responses/responseSuccess')

const isBlockedCtrl = handleAsync(
  async (req, res) => {
    const adminUser = await User.findOne({ email: req.user?.email })
    adminUser?.isBlocked &&
      responseError(res, 403, false, 'Unauthorised action', null)
    adminUser?.role !== 'admin' &&
      responseError(res, 401, false, 'Unauthorised action', null)

    if (adminUser?.role === 'admin' && adminUser?.isBlocked === false) {
      const user = await User.findOne({ email: req.body?.email })

      !user && responseError(res, 404, false, 'User not found', null)

      const updatedUser = await User.findOneAndUpdate(
        { email: req.body?.email },
        {
          isBlocked: req.body?.isBlocked,
        },
        { new: true }
      )

      updatedUser && responseSuccess(res, 200, true, 'Updated Blocked Status')
      !updatedUser &&
        responseError(
          res,
          409,
          false,
          'Unable to update the blocked user status',
          null
        )
    }
  },
  (error) => {
    throw new Error(error)
  }
)

module.exports = isBlockedCtrl
