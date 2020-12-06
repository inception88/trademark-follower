import React, { Component } from 'react';

const API_KEY = process.env.REACT_APP_USPTO_API_KEY;

class Trademark extends Component {

trademarks = () => {
    fetch('https://cors-anywhere.herokuapp.com/https://tsdrapi.uspto.gov/ts/cd/casestatus/sn90130409/info', { headers: {"USPTO-API-KEY": API_KEY}}
    ).then(response => { 
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