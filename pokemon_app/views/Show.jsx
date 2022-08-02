const React = require('react');
const pokemon = require('../models/pokemon');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

    class Show extends React.Component {
        render () {
         const pokemon = this.props.pokemon
         return (
             <div>
           <h1> Gotta Catch 'Em All!' </h1>
            <h2> Whose That Pokémon?!... It's {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
             </h2>
             <img src={pokemon.img + '.jpg'}></img>
             <nav>
     <a href="/pokemon/">Pokedex Menu</a>
 </nav>
             </div>
          );
         }
      }
    
      
    module.exports = Show