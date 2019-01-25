
let express = require('express')
let mongoose = require('mongoose')
let app = express()
let movieRouter = require('./movies/controller')
let bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let errorMiddleWare = function(error, req, res, next) {
	res.status(500).json({error: true})
}

app.use(errorMiddleWare)
app.use('/movies', movieRouter)


const PORT = 9000

app.listen(PORT)
console.log("Listening on port: ", PORT)
