const React = require('react');
const pokemon = require('../models/pokemon');
const myStyle = {
    color: '#000000',
    backgroundColor: '#33333329',
  };


    class Index extends React.Component {
      render() {
        
          return (
                  <div style ={myStyle}>
                      <h1>See All Pokemon</h1>
                      <ul>
                        {pokemon.map((pokemon,i) => {return(
                                  <li >                              
                                      <a href={`/pokemon/${i}`}>
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