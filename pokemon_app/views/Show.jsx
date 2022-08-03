const React = require('react');
// const pokemon = require('../models/Pokemon');
const myStyle = {
    color: '#000000',
    backgroundColor: '#33333329',
  };

    class Show extends React.Component {
        render () {
         const pokemon = this.props.pokemon
         return (
             <div style ={myStyle}>
           <h1> Gotta Catch 'Em All!' </h1>
            <h2> Whose That Pokémon?!... It's {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
             </h2>
             <img src={pokemon.image + '.jpg'}></img>
             <nav>
     <a href="/pokemon/">Pokedex Menu</a>
 </nav>
             </div>
          );
         }
      }
    
      
    module.exports = Show