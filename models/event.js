const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    title: {type: String},
    note: {type: String}
})
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;