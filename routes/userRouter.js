const express = require('express')
const router = express.Router()

const { userCtrl } = require('../controllers/index')
const validate = require('../validation')
const newUserSchema = require('../validation/newUserSchema')

router.post('/user', validate(newUserSchema), userCtrl.registerUser)

module.exports = router
