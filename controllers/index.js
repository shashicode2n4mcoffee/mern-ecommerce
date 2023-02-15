const registerUserCtrl = require('./user/registerCtrl')
const loginCtrl = require('./user/loginCtrl')
const updateRoleCtrl = require('./user/updateRoleCtrl')
const isBlockedCtrl = require('./user/isBlockedCtrl')

module.exports = {
  registerUserCtrl,
  loginCtrl,
  updateRoleCtrl,
  isBlockedCtrl,
}
