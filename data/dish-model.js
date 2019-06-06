const knex = require('knex');
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development);


module.exports = {
    getDishes,
    addDish,
    getDishById,
  update,
  remove,
};

function getDishes() {
  return db('dishes');
}

function getDishById(id) {
    return db('dishes')
      .where({ id })
      .first();
  }

async function addDish(recipe) {
  const [id] = await db('dishes').insert(recipe);
}

function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}