const React = require('react');
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
                  </div>
          );
      }
    }

    
      
    module.exports = Index;