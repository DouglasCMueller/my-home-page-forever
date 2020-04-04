const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDateFormat = require('mongoose-date-format');


const eventSchema = new Schema({
    date: {type: String},
    title: {type: String},
    note: {type: String}
}, { collection: 'Events' })

eventSchema.plugin(mongooseDateFormat);  // format: YYYY-MM-DD HH:mm:ss

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;