const React = require('react');
// const pokemon = require('../models/Pokemon');
const myStyle = {
    color: '#000000',
    backgroundColor: '#33333329',
  };


class Index extends React.Component {
     render() {
        const {pokemon} = this.props
        return (
            <div style ={myStyle}>
              <h1>See All Pokemon</h1>
                 <ul>
                    {pokemon.map((pokemon) => {return(
                      <li >                              
                        <a href={`/pokemon/${pokemon.id}`}>
                           {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>                                  
                      </li>
                           );
                      })}
                 </ul>
              </div>
        );
      }
    }

    
      
    module.exports = Index;