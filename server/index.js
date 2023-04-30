require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connection = require('./config/db')

const app = express()

//connect database
connection()

//middlewares
app.use(cors())
app.use(express.json())

//port
const PORT = process.env.PORT || 5000

//listen to port
app.listen(PORT, console.log(`Server connected to ${PORT}`))