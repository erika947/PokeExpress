const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3003;
const Pokemon = require('./models/pokemon')
const methodOverride = require('method-override')
const mongoose = require('mongoose');
// const { application } = require('express');
const pokemonData = require('./utilities/pokemonData')


//DB Connection
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });


//middleware
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Routes:

// Seed route
app.get('/pokemon/seed', async (req, res) => {
    await Pokemon.deleteMany({}); //Clear database
    await Pokemon.create(pokemonData);
    // await Pokemon.deleteMany({name: /saur/}); //This will filter out all pokemon with 'saur'. We don't really need it. Just showing what it can do
    res.redirect('/pokemon');
  })

//index:
app.get('/', (req, res) => {
    res.render('Homepage')
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

app.get('/pokemon/:id/edit', (req, res) => {
    Pokemon.findById(req.params.id, (error, foundPokemon) => {
        if(!error) {
            res.render('Edit',{
                pokemon: foundPokemon
            })
        } else {
            res.send({
                message: error.message
            })
        }
    })
    
})

//Create:

app.post('/pokemon/', (req, res)=>{
    Pokemon.create(req.body, (error, createdPokemon)=>{
        console.log(req.body)
        res.redirect(/pokemon/);
    });
});

//update route
app.put('/pokemon/:id', (req, res) => {
    Pokemon.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (error, pokemon) => {
        res.redirect(`/pokemon/${req.params.id}`)
    })
})

//delete route
app.delete('/pokemon/:id', (req, res) => {
    console.log('we are deleting')
    Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/pokemon')
    })
})

app.listen(port, () => {
    console.log(`*** Listening on http://localhost:${port} ***`)
})    