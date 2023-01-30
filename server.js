require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const dbConnect = require('./config/dbConnect')

const PORT = process.env.PORT || 8082

const app = express()

dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/api/v1', (req, res) => {
  res.status(200).send('Hello world')
})

app.listen(PORT, () => {
  console.log(`Server is listening on the PORT : ${PORT}`)
})
