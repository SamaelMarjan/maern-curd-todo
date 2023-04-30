require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connection = require('./config/db')
const todoRoute = require('./routes/todoRoute')

const app = express()

//connect database
connection()

//middlewares
app.use(cors())
app.use(express.json())

app.use('/api/todo', todoRoute)

//port
const PORT = process.env.PORT || 5000

//listen to port
app.listen(PORT, console.log(`Server connected to ${PORT}`))