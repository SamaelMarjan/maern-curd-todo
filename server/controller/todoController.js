const todoModel = require('../model/todoModel')

//create task
module.exports.createTodo = async(req, res) => {
    try {
        const {title, task, time} = req.body
        //validations
        if(!title){
            return res.json({message: "Title is missing"})
        }
        if(!task){
            return res.json({message: "Task is required"})
        }
        if(!time){
            return res.json({message: "Time is required"})
        }
        const createTask = await todoModel({...req.body}).save()
        res.status(200).json({
            success: true,
            message: "Successfully created task",
            createTask
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false, message: "Something wrong in creating todo"
        })
    }
}

//get todo
module.exports.getAllTodo = async(req, res) => {
    try {
        const todo = await todoModel.find()
        res.status(200).json({
            success: true, message: "All todos", todo
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false, message: "Something wrong in creating todo"
        })
    }
}

//get single
module.exports.getSingle = async(req, res) => {
    try {
        const {id} = req.params
        const singleTodo = await todoModel.findById(id)
        res.status(200).json({
            success: true, message: "Single todo", singleTodo
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false, message: "Something wrong in creating todo"
        })
    }
}

//update task
module.exports.updateTodo = async(req, res) => {
    try {
        const {id} = req.params
        await todoModel.findByIdAndUpdate(id, {...req.body})
        res.status(200).json({
            success: true, message: "Task updated"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false, message: "Something wrong in creating todo"
        })
    }
}

//delete task
module.exports.deleteTask = async(req, res) => {
    try {
        const {id} = req.params
        await todoModel.findByIdAndDelete(id)
        res.status(200).json({
            success: true, message: "Deleted successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false, message: "Something wrong in creating todo"
        })
    }
}