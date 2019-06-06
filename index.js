const express = require('express');

const knex = require('knex');
const knexConfig = require('./knexfile');


const db = knex(knexConfig.development);

const server = express();
server.use(express.json());

server.get('/', async (req, res) => {
    try {
        const recipeBook = await db('dishes');
        res.status(200).json(recipeBook);
    } catch (error) {
        res.status(500).json({ error: `${error}` });
    };
});
server.get('/recipes', async (req, res) => {
    try {
        const recipeData = await db('recipes');
        res.status(200).json(recipeData);
    } catch (error) {
        res.status(500).json({ error: `${error}`})
    }
})

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));