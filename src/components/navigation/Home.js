import React, { Component } from 'react';
import TrademarkSearch from '../trademarks/TrademarkSearch'
import { connect } from 'react-redux';
import { followTrademark, unfollowTrademark } from '../../actions/trademarkActions';

class Home extends Component {

  render() {
    return (
      <div>
          <h1><a target ='_blank' href="http://tess2.uspto.gov/">Trademark Electronic Search System(TESS)</a></h1>
          <h2>Trademark Example Serial Number: EnterAction Apparel (87818121)</h2>
            <TrademarkSearch trademarks={this.props.trademarks} token={this.props.token} followTrademark={this.props.followTrademark} unfollowTrademark={this.props.unfollowTrademark}/>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => ({token: state.user.token, trademarks: state.trademarks.trademarks})

const mapDispatchToProps = dispatch => ({
    //fetchTrademark: (sn) => dispatch(fetchTrademark(sn)),
    followTrademark: (trademark, token) => () => dispatch(followTrademark(trademark, token)),
    unfollowTrademark: (id, token) => dispatch(unfollowTrademark(id, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)