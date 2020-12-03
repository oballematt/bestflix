const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(
    process.env.MONGOD_URI ||
    "mongodb://localhost/mediatitles"
)

const mediaSeed = [
    {
        title: "The Lord Of The Rings",
        year: 2001,
        imdbrating: 10,
        synopsis: "One ring to rule them all"
    }
]

db.Media
.remove({})
.then(() => db.Media.collection.insertMany(mediaSeed))
.then(data => {
    console.log(data.result.n + " records inserted")
    process.exit(0)
})
.catch(err => {
    console.error(err)
    process.exit(1)
})