const express = require('express');
const recipeServer = require('./data/recipe-model');
const dishServer = require('./data/dish-model')

const knex = require('knex');
const knexConfig = require('./knexfile');


const db = knex(knexConfig.development);

const server = express();
server.use(express.json());

server.get('/', async (req, res) => {
    res.send(`You're in the root directory, navigate to /dishes to see dishes or /recipes to see the recipes for each!`);

});
server.get('/recipes', async (req, res) => {
    try {
        const recipeData = await recipeServer.getRecipes();
        res.status(200).json(recipeData);
    } catch (error) {
        res.status(500).json({ error: `${error}` })
    }
});
server.get('/dishes', async (req, res) => {
    try {
        const dishesData = await dishServer.getDishes();
        res.status(200).json(dishesData);
    } catch (error) {
        res.status(500).json({ error: `${error}` })
    }
});
server.get('/dishes/:id', async (req, res) => {
    try {
        const dishesIdData = await dishServer.getDishById(req.params.id);
        res.status(200).json(dishesIdData);
    } catch (error) {
        res.status(500).json({ error: `${error}` })
    }
});

server.post('/dishes', async (req, res) => {
    try {
        const newDish = await dishServer.addDish(req.body);
        res.status(201).json(newDish)
    } catch (error) {
        res.status(500).json({ error: `${error}` })
    }
});

server.post('/recipes', async (req, res) => {
    try {
        const newRecipe = await recipeServer.addRecipe(req.body);
        res.status(201).json(newRecipe)
    } catch (error) {
        res.status(500).json({ error: `${error}` })
    }
});
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));