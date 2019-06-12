exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe: "Grannys Tacos",
          directions: "blah",
          dish_id: 1
        },
        {
          recipe: "TexMex Tacos",
          directions: "tacostuff",
          dish_id: 1
        },
        {
          recipe: "My Tacos",
          dish_id: 1
        }
      ]);
    });
};
