const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3003;
const pokemon = require('./models/pokemon')

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon})
})// Need to capitalize the first letter of their names

app.get('/pokemon/:indexOfPokemonArray', (req, res) => {
    res.render('Show', {
        pokemon: pokemon[req.params.indexOfPokemonArray] 
    })
})

app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
})    