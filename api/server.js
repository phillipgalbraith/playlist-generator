const express = require('express')
const server = express()
const associationRouter = require('./association/router')
const calendarRouter = require('./calendar/router')
const playlistRouter = require('./playlist/router')

server.use('/association', associationRouter)
server.use('/calendar', calendarRouter)
server.use('/playlist', playlistRouter)

server.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = server;
