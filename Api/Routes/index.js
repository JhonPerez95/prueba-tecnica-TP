const express = require('express')
const app = express()

app.use(require('./game.js'))

module.exports = app
