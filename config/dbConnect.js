const mongoose = require('mongoose')

const dbConnect = () => {
  try {
    const connect = mongoose.connect(process.env.MONGODB_URI)
    console.log('DATABASE CONNECTED SUCCESSFULLY')
  } catch (error) {
    console.log('DATABASE ERROR : ', error)
  }
}

module.exports = dbConnect
