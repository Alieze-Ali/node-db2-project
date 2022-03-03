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

const create = () => {
  // DO YOUR MAGIC
}

// Be sure to include module.exports

module.exports = {
  getAll,
  getById,
  create,
}