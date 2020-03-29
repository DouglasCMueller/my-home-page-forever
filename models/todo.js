const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {type: String},
    note: {type: String}
}, { collection: 'Todos' })



const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;