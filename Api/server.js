const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const axios = require('axios')

const { configAccToken } = require('./config/cofnig')

// Initialize server
const app = express()

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// aut-token
const getToken = async (config) => {
    // const {data} = await axios(config)
    // const  {access_token} = data
    const  access_token = 'asdasdasdasdasdas'
    // console.log(access_token)
    process.env.TOKEN = access_token
}
getToken(configAccToken)
// console.log( token)
// Routes
app.use(require('./Routes/index.js'))

module.exports = app
