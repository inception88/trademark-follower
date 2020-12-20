import React, { Component } from 'react';
import Trademark from '../trademarks/Trademark';
import { withRouter } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_USPTO_API_KEY;

class Trademarks extends Component {

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
        errorMessage: '',
        id: ''
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

    fetchTrademark = (trademark) => () => {
        this.setState({...this.state, id: trademark.id})
        this.trademarkSearch(trademark.serialNumber)
    }

    componentDidUpdate(prevProps) {
      const { history } = this.props;
      console.log("trademarks update")
      console.log(prevProps)
      console.log(this.props)
      if (this.props.trademarks !== prevProps.trademarks) {
          this.setState({
            submitted: false
          })
          console.log("trademarks no longer submitted")
      }
  }

  render() {
    return(
      <div>
        {this.props.trademarks.map((trademark, index) => {
           return <a onClick={this.fetchTrademark(trademark)}><h1>{index+1}. {trademark.mark}</h1></a>
           })}
        {this.state.submitted && < Trademark token={this.props.token} followTrademark={this.props.followTrademark} unfollowTrademark={this.props.unfollowTrademark} trademark={this.state} />}
      </div>
    );
  }
};

export default withRouter(Trademarks)