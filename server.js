//require express
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// Books: 
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

//home
app.get('/', function (req, res) {
    res.send('Hello world')
})

// listen
app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })