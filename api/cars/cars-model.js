// Need db wrapper
const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = (id) => {
  // DO YOUR MAGIC
  // First grabs the first car with id
  return db('cars').where('id', id).first()
}

// add get by vin
const getByVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

const create = (car) => {
  // DO YOUR MAGIC
  return db('cars').insert(car)
  .then(([id]) => {
    return getById(id)
  })

}

// Be sure to include module.exports

module.exports = {
  getAll,
  getById,
  create,
  getByVin,
}