import React, { Component } from 'react';
import { connect } from 'react-redux';
import Trademarks from '../components/trademarks/Trademarks';
import { fetchTrademarks } from '../actions/trademarkActions';


class TrademarkContainer extends Component {

  componentDidMount() {
    console.log(this.props.token)
    this.props.fetchTrademarks(this.props.token);
  }

  render() {
    return (
      <div>
        <Trademarks trademarks={this.props.trademarks} followTrademark={this.props.followTrademark} unfollowTrademark={this.props.unfollowTrademark} />
      </div>
    )
  }
}

const mapStateToProps = ( state ) => ({token: state.user.token, trademarks: state.trademarks.trademarks})
const mapDispatchToProps = dispatch => ({
    fetchTrademarks: (token) => dispatch(fetchTrademarks(token)),
    //followTrademark: trademark => dispatch(followTrademark()),
    //unfollowTrademark: trademark => dispatch(unfollowTrademark())
})

export default connect(mapStateToProps, mapDispatchToProps)(TrademarkContainer)