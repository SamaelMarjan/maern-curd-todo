const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{type: String, required: true},
    task:{type: String, required: true},
    time:{type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('Todo', todoSchema)