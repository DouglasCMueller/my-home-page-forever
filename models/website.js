const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
    name: {type: String},
    url: {type: String},
    category: {
        type: String,
    default: "Social Media"},
favorite: {
    type: Boolean,
    default: false },
}, { collection: 'Websites' })

const Website = mongoose.model("Website", websiteSchema);

module.exports = Website;