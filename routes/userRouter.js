const express = require('express')
const router = express.Router()

const { userCtrl } = require('../controllers/index')

const validate = require('../validation')

const loginUserSchema = require('../validation/loginUserSchema')
const newUserSchema = require('../validation/newUserSchema')
const updateRoleSchema = require('../validation/updateRoleSchema')

router.post('/register', validate(newUserSchema), userCtrl.registerUser)
router.post('/login', validate(loginUserSchema), userCtrl.loginUser)
router.patch('/role', validate(updateRoleSchema), userCtrl.updateRole)

module.exports = router
