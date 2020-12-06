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
      <div>
        <h1>Trademark Title</h1>
        <p>Filing Date</p>
        <p>Status Date</p>
        <p>Status</p>
        <p>Serial Number</p>
        <p>Registration number if registered</p>
        <p>Prosecution history</p>
        <button onClick={this.trademarks}>Update the Trademark</button>
      </div>
    );
  }
}

export default Trademark