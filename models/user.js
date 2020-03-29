const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: {type: String},
    lname: {type: String},
    locationcity: {type: String},
    locationstate: {type: String},
    email: {type: String},
    password: {type: String},
    event: { type : Array , "default" : [] },
    todo: { type : Array , "default" : [] },
    favoritewebsite: {type : Array, "default" : []}

}, { collection: 'Users' })

const User = mongoose.model("User", userSchema);

module.exports = User;