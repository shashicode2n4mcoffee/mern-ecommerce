require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 8082

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Hello world')
})

app.listen(PORT, () => {
  console.log(`Server is listening on the PORT : ${PORT}`)
})
