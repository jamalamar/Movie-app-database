
let mongoose = require('mongoose')

let MovieSchema = mongoose.Schema({
	title: String,
	director: String,
	year: Number,
	cast: [String]
})



let MovieModel = mongoose.model('Movie', MovieSchema)

module.exports = MovieModel