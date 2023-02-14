const bcrypt = require('bcrypt')

const validateHashedPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}

module.exports = validateHashedPassword
