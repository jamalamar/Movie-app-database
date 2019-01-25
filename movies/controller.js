
let express = require('express')
let router = express.Router()
let Movie = require('./model')


//Get All
router.get('/', (req, res)=> {
	Movie
		.find()
		.then((movies)=> {
			res.json(movies)
		})
})


//Create
router.post('/', (req, res)=> {
	let movie = new Movie({
		title: req.body.title,
		director: req.body.director,
		year: req.body.year,
		cast: req.body.cast
	})

	movie
	.save()
	.then((savedMovie)=> {
		res.json(savedMovie)
	})
})


//Update
router.put('/')

router.delete('/director/:director', (req, res)=> {
	let director = req.params.director
	Movie
		.deleteMany({director})
		.then(()=> {
			res.json({deleted: true})
		})
})


//Delete
router.delete('/:id', (req, res)=> {
	let id = req.params.id
	Movie
		.findByIdAndDelete(id)
		.then(()=> {
			res.json({deleted: true})
		})
})


module.exports = router






