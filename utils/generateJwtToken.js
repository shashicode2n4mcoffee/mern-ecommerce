const jwt = require('jsonwebtoken')

const generateJwtToken = (_id, secret) => {
  return jwt.sign({ _id }, secret)
}

module.exports = generateJwtToken
