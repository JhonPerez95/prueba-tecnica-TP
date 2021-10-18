const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { configAccToken } = require('./config/cofnig')

// Initialize server
const app = express()

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


// Routes
app.use(require('./Routes/index.js'))

module.exports = app
