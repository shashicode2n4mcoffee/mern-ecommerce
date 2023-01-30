require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const dbConnect = require('./config/dbConnect')

const PORT = process.env.PORT || 8082

const app = express()
dbConnect()

app.get('/', (req, res) => {
  res.status(200).send('Hello world')
})

app.listen(PORT, () => {
  console.log(`Server is listening on the PORT : ${PORT}`)
})
