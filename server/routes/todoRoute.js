const express = require('express')
const router = express.Router()
const { createTodo, getAllTodo, getSingle, updateTodo, deleteTask } = require('../controller/todoController')

//create todo
router.post('/create', createTodo)

//get todo
router.get('/get', getAllTodo)

//get single
router.get('/get/:id', getSingle)

//update task
router.put('/update/:id', updateTodo)

//delete task
router.delete('/delete/:id', deleteTask)

module.exports = router