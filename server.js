//DEPENDENCIES
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

// CONFIGURATION & MIDDLEWARE
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

//MONGOOSE
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// POINT TO BOOKS CONTROLLER
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

//INDEX
app.get('/', function (req, res) {
    res.send('Hello world')
})

// LISTEN
app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })