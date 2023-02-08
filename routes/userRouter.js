const express = require('express')
const router = express.Router()

const { userCtrl } = require('../controllers/index')

const validate = require('../validation')

const loginUserSchema = require('../validation/loginUser')
const newUserSchema = require('../validation/newUserSchema')

router.post('/user', validate(newUserSchema), userCtrl.registerUser)
router.post('/user', validate(loginUserSchema), userCtrl.loginUser)


module.exports = router
