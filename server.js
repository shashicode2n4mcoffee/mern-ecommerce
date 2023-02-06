require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// LOCAL IMPORTS
const dbConnect = require('./config/dbConnect')
const { errorHandler, notFound } = require('./middlewares')

// DECLARATIONS
const PORT = process.env.PORT || 8082
const app = express()

// DB CONNECTION
dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/api/v1', (req, res) => {
  res.status(200).send('Hello world')
})
//ERROR HANDLER
app.use(errorHandler)
app.use(notFound)

//SERVER LAUNCH
app.listen(PORT, () => {
  console.log(`Server is listening on the PORT : ${PORT}`)
})
