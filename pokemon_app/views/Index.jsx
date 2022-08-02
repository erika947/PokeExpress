const React = require('react');
const pokemon = require('../models/pokemon');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
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
                                          {pokemon.name}
                                      </a>                                  
                                  </li>
                              );
                          })}
                        

                      </ul>
                  </div>
          );
      }
    }

    
      
    module.exports = Index;