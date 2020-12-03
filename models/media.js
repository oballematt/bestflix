const mongoose = require("mongoose")
const Schema = mongoose.Schema

const mediaSchema = new Schema({
    title: { type: String, required: true},
    year: {type: Number, required: true},
    imdbrating: { type: Number, required: true},
    synopsis: { type: String, required: true}
})

const Media = mongoose.model("Media", mediaSchema)

module.exports = Media