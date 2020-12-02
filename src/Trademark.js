import React, { Component } from 'react';

class Trademark extends Component {

trademarks = () => {
    fetch('http://localhost:3000/api/v1/trademarks.json').then(response => { 
        return response.json() 
    }).then(responseJSON => { 
      console.log(responseJSON)
  })
}

render() {
    return (
      <div className="App">
        <button onClick={this.trademarks}>Look for trademarks</button>
      </div>
    );
  }
}

export default Trademark