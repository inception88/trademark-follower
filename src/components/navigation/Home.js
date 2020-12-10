import React, { Component } from 'react';
import TrademarkSearch from '../trademarks/TrademarkSearch'

class Home extends Component {

  render() {
    return (
      <div>
          <h1>USPTO.GOV Trademark Search Database: <a target ='_blank' href="http://tmsearch.uspto.gov/bin/gate.exe?f=tess&state=4809:my35km.1.1">Click Here</a></h1>
          <h1>USPTO.GOV Basic Word Mark Search: <a target ='_blank' href="http://tmsearch.uspto.gov/bin/gate.exe?f=searchss&state=4809:my35km.1.1">Click Here</a></h1>
          <h2>Trademark Example Serial Number: EnterAction Apparel (87818121)</h2>
            <TrademarkSearch/>
      </div>
    )
  }
}

export default Home