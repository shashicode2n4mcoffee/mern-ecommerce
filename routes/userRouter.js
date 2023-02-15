const express = require('express')
const router = express.Router()

const {
  registerUserCtrl,
  loginCtrl,
  updateRoleCtrl,
} = require('../controllers/index')
const isBlockedCtrl = require('../controllers/user/isBlockedCtrl')
const auth = require('../middlewares/auth')
const validate = require('../validation')

const loginUserSchema = require('../validation/loginUserSchema')
const newUserSchema = require('../validation/newUserSchema')
const updateRoleSchema = require('../validation/updateRoleSchema')

router.post('/register', validate(newUserSchema), registerUserCtrl)
router.post('/login', validate(loginUserSchema), loginCtrl)
router.patch('/role', validate(updateRoleSchema), auth, updateRoleCtrl)
router.patch('/block', auth, isBlockedCtrl)

module.exports = router
