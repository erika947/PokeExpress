const express = require('express');
const mongoose = require('mongoose')

require('dotenv').config()
const app = express();
const port = process.env.PORT || 3003;

const Pokemon = require('./models/pokemon')
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });
   

//middleware
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//Routes:

//index:
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', {pokemon: allPokemon})
    })
})

//new:
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

app.get('/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) =>{
        res.render('Show', {pokemon:foundPokemon})
    })
})


//Create:

app.post('/pokemon/', (req, res)=>{
    Pokemon.create(req.body, (error, createdPokemon)=>{
        console.log(req.body)
        res.redirect(/pokemon/);
    });
});

app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
})    