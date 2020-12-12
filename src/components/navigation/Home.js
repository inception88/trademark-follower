import React, { Component } from 'react';
import TrademarkSearch from '../trademarks/TrademarkSearch'

class Home extends Component {

  render() {
    return (
      <div>
          <h1>USPTO.GOV Trademark Electronic Search System(TESS): <a target ='_blank' href="http://tess2.uspto.gov/">Click Here</a></h1>
          <h2>Trademark Example Serial Number: EnterAction Apparel (87818121)</h2>
            <TrademarkSearch/>
      </div>
    )
  }
}

export default Home