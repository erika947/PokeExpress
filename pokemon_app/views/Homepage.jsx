const React = require('react');
// const pokemon = require('../models/Pokemon');
const myStyle = {
    color: '#000000',
    backgroundColor: '#33333329',
  };

class Homepage extends React.Component {
    render() {
      const {pokemon} = this.props
      return (
        <div >
          <h1>click button to See All Pokemon</h1>
                 <nav>
     <a href="/pokemon/">Pokedek's</a>
 </nav>
              </div>
        );
      }
    }

    module.exports = Homepage;