const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./router/aliens')
app.use('/aliens',alienRouter)

const bookRouter = require('./router/books')
app.use('/books',bookRouter)

app.listen(9000, () => {
    console.log('Server started')
})