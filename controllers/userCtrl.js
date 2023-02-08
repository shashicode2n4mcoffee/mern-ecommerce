const handleAsync = require('async-error-handler')

const { User } = require('../models/index')
const responseError = require('../responses/responseError')
const responseSuccess = require('../responses/responseSuccess')

const registerUser = handleAsync(
  async (req, res) => {
    const findUser = await User.find({ email: req.body?.email })
    if (findUser?.length) {
      responseError(res, 409, false, 'User already exists', null)
    } else {
      const user = await User.create(req.body)
      if (user) {
        responseSuccess(res, 200, true, user)
      } else {
        responseError(res, 409, false, 'Unable to create the user', null)
      }
    }
  },
  (error) => {
    throw new Error(error)
  }
)

const loginUser = handleAsync(
  (req, res) => {
    const findUser = User.findOne(req.body?.email)

    if (!req.body.email) {
      responseError(res, 400, false, 'Please enter the email credential')
    }

    if (findUser) {
      responseSuccess(res, 200, true, findUser)
    } else {
      responseError(res, 404, false, 'Unable to find the user', null)
    }
  },
  (error) => {
    throw new Error(error)
  }
)

const updateRole = handleAsync(
  async (req, res) => {
    const findUser = User.findOne(email)
    console.log('FIND USER : ', findUser)
    if (!findUser) {
      responseError(res, 404, false, 'User not exists', null)
    }

    if (findUser?.role !== 'admin') {
      responseError(res, 403, false, 'Unauthorized action', null)
    }

    const updatedUserRole = User.findOneAndUpdate(
      { email: req.body?.email },
      { role: req.body?.role },
      { new: true }
    )

    responseSuccess(res, 200, true, updatedUserRole)
  },
  (error) => {
    throw new Error(error)
  }
)

module.exports = { registerUser, loginUser, updateRole }
