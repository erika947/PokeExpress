const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Pokemon page</h1>
            <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" /><br/>
                Image: <input type="text" name="image" /><br/>
                <input type="submit" name="" value="Create Pokemon"/>
             </form>
             <nav>
     <a href="/pokemon/">Pokedex Menu</a>
 </nav>
        </div>);
  }
}

module.exports = New;