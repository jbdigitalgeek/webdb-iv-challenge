const knex = require('knex');
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development);


module.exports = {
    getRecipes,
    addRecipe,
//   getRecipeById,
  update,
  remove,
};

function getRecipes() {
    return db('recipes').join('dishes', 'dishes.id', '=', 'recipes.dish_id').select({ dish: 'dishes.dish' },
    'recipes.id', 'recipes.recipe', 'recipes.directions');
}

// function getRecipeById(id) {
//     return db('recipes')
      
//       .join('dishes', 'recipes.id', '=', 'dishes.dish_id')
//       .select({ dish: 'dishes.dish' },
//       'recipes.id', 'recipes.recipe', 'recipes.directions').where({'dishes.dish_id': id })
    
// };


async function addRecipe(recipe) {
  const [id] = await db('recipes').insert(recipe);
}

function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}
