const mongoose = require('mongoose')

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('DB CONNECTION SUCCESSFUL')
  } catch (error) {
    console.log('DATABASE ERROR : ', error)
  }
}

module.exports = dbConnect
