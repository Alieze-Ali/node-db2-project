// DO YOUR MAGIC
// Bring in Express, Model & Router
const express = require("express")
const Car  = require("./cars-model")
const {
    checkCarId,
} = require('./cars-middleware')

const router = express.Router()

// Set up Routers

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    //res.json(`getting car with id ${req.params.id}`)
  res.json(req.car)
})

router.post('/', async (req, res, next) => {
    res.json('posting new car')
})

module.exports = router