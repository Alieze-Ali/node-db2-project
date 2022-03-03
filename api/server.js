const express = require("express")
// Bring in Cars Router
const carsRouter = require('./cars/cars-router')

const server = express()

// DO YOUR MAGIC
server.use(express.json())

// use car router here
server.use('/api/cars', carsRouter)

server.use('*', (req, res, next) => {
    next({ status: 404, message: 'not found!!!' })
})
// error handler
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server
