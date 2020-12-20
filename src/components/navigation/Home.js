import React, { Component } from 'react';
import TrademarkSearch from '../trademarks/TrademarkSearch'
import { connect } from 'react-redux';
import { followTrademark } from '../../actions/trademarkActions';

class Home extends Component {

  render() {
    return (
      <div>
          <h1><a target ='_blank' href="http://tess2.uspto.gov/">Trademark Electronic Search System(TESS)</a></h1>
          <h2>Trademark Example Serial Number: EnterAction Apparel (87818121)</h2>
            <TrademarkSearch token={this.props.token} followTrademark={this.props.followTrademark} />
      </div>
    )
  }
}

const mapStateToProps = ( state ) => ({token: state.user.token})

const mapDispatchToProps = dispatch => ({
    //fetchTrademark: (sn) => dispatch(fetchTrademark(sn)),
    followTrademark: (trademark, token) => () => dispatch(followTrademark(trademark, token)),
    //unfollowTrademark: trademark => dispatch(unfollowTrademark())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)