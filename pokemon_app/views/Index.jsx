const React = require('react');
const pokemon = require('../models/pokemon');
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };


    class Index extends React.Component {
      render() {
        //   const { Index } = this.props;
          return (
                  <div style ={myStyle}>
                      <h1>See All Pokemon</h1>
                      <ul>
                        {pokemon.map((pokemon,i) => {return(
                                  <li class="capitalize-me" >                              
                                      <a href={`/pokemon${i}`}>
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