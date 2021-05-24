const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const fs = require('fs')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
  next()
})

const port = process.env.PORT || 4001

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('your app')
})

module.exports = app
