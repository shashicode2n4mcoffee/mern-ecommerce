const express = require('express')
const router = express.Router()

const { userCtrl } = require('../controllers/index')

router.post('/user', userCtrl.registerUser)

module.exports = router
