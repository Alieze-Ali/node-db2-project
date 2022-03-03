// Need db wrapper
const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = () => {
  // DO YOUR MAGIC
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