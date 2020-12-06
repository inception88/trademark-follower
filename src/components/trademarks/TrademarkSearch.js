import React, { Component } from 'react';

const API_KEY = process.env.REACT_APP_USPTO_API_KEY;

class TrademarkSearch extends Component {

    state = {
        data: "",
        mark: '',
        serialNumber: '',
        status: '',
        prosecutionHistory: '',
        statusDate: '',
        filingDate: '',
        registrationNumber: ''
      }

    saveState(JSON){
        console.log(JSON.trademarks[0].status.markElement)
        this.setState({
            data: JSON,
            mark: JSON.trademarks[0].status.markElement,
            serialNumber: JSON.trademarks[0].status.serialNumber,
            status: JSON.trademarks[0].status.extStatusDesc,
            prosecutionHistory: JSON.trademarks[0].prosecutionHistory,
            statusDate: JSON.trademarks[0].status.statusDate,
            filingDate: JSON.trademarks[0].status.filingDate,
            registrationNumber: ''
            });
}

trademarkSearch = (sn) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://tsdrapi.uspto.gov/ts/cd/casestatus/sn${sn}/info`, { headers: {"USPTO-API-KEY": API_KEY}}
    ).then(response => { 
        return response.json() 
    }).then(JSON => { 
        this.saveState(JSON)
  })
}
//90130409 test Serial number: Ben Jones Codes
handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.trademarkSearch(this.state.text);
  }

render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TrademarkSearch
