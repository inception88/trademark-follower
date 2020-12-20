import React, { Component } from 'react';
import { connect } from 'react-redux';
import Trademarks from '../components/trademarks/Trademarks';
import { fetchTrademarks, followTrademark, unfollowTrademark } from '../actions/trademarkActions';


class TrademarkContainer extends Component {

  componentDidMount() {
    console.log(this.props.token)
    this.props.fetchTrademarks(this.props.token);
  }

  render() {
    return (
      <div>
        <Trademarks token={this.props.token} trademarks={this.props.trademarks} followTrademark={this.props.followTrademark} unfollowTrademark={this.props.unfollowTrademark} />
      </div>
    )
  }
}

const mapStateToProps = ( state ) => ({token: state.user.token, trademarks: state.trademarks.trademarks})
const mapDispatchToProps = dispatch => ({
    fetchTrademarks: (token) => dispatch(fetchTrademarks(token)),
    //fetchTrademark: (sn) => dispatch(fetchTrademark(sn)),
    followTrademark: (trademark, token) => () => dispatch(followTrademark(trademark, token)),
    unfollowTrademark: (id, token) => () => dispatch(unfollowTrademark(id, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(TrademarkContainer)