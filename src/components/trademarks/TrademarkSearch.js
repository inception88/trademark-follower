import React, { Component } from 'react';
import Trademark from './Trademark';
import Error from '../errors/Error';

const API_KEY = process.env.REACT_APP_USPTO_API_KEY;

class TrademarkSearch extends Component {

    state = {
        data: '',
        mark: '',
        serialNumber: '',
        status: '',
        prosecutionHistory: '',
        statusDate: '',
        filingDate: '',
        registrationNumber: '',
        text: '',
        error: false,
        submitted: false,
        errorMessage: ''
      }

    saveState(JSON){
        this.setState({
            data: JSON,
            mark: JSON.trademarks[0].status.markElement,
            serialNumber: JSON.trademarks[0].status.serialNumber,
            status: JSON.trademarks[0].status.extStatusDesc,
            prosecutionHistory: JSON.trademarks[0].prosecutionHistory,
            statusDate: JSON.trademarks[0].status.statusDate,
            filingDate: JSON.trademarks[0].status.filingDate,
            registrationNumber: '',
            errorMessage: '',
            error: false,
            submitted: true
            });
    }

    error(error) {
        this.setState({
            error: true,
            submitted: false,
            errorMessage: `${error}`
        })
    }

trademarkSearch = (sn) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://tsdrapi.uspto.gov/ts/cd/casestatus/sn${sn}/info`, { headers: {"USPTO-API-KEY": API_KEY}}
    ).then(response => { 
        return response.json() 
    }).then(JSON => { 
        this.saveState(JSON)
    }).catch(error => {
      this.error(error)
    })
}
//90130409 test Serial number: Ben Jones Codes
//87818121 test Serial number: EnterAction Apparel
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
        <form className='center' onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
        {this.state.submitted && < Trademark state={this.state}/>}
        {this.state.error && < Error message={this.state.errorMessage}/>}
      </div>
    );
  }
}

export default TrademarkSearch
