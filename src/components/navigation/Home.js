import React, { Component } from 'react';
import TrademarkSearch from '../trademarks/TrademarkSearch'

class Home extends Component {

  render() {
    return (
      <div>
          <h1>USPTO.GOV Trademark search database: <a target ='_blank' href="http://tmsearch.uspto.gov/bin/gate.exe?f=tess&state=4809:my35km.1.1">Click Here</a></h1>
            <TrademarkSearch/>
      </div>
    )
  }
}

export default Home