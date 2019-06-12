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
  return db('dishes')
}

function getDishById(id) {
    return db('dishes')
        .join('recipes', 'dishes.id', '=', 'recipes.dish_id')
        .select('dishes.id', 'dishes.dish', { recipe : 'recipes.recipe'})
      .where({ 'dishes.id': id })
        
  }

function addDish(dish) {
  return db('dishes').insert(dish, 'id').then(([id])=>{return getDishById(id)});
}

function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}