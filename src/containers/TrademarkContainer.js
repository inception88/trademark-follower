import React, { Component } from 'react';
import { connect } from 'react-redux';
import Trademarks from '../trademarks/Trademarks';

class TrademarksContainer extends Component {

  render() {
    return (
      <div>
        <Route exact path="/follows"> <Trademarks token={this.props.token} followTrademark={this.props.followTrademark} unfollowTrademark={this.props.unfollowTrademark} /></Route>
      </div>
    )
  }
}

const mapStateToProps = ({ trademarks }) => ({ trademarks })

const mapDispatchToProps = dispatch => ({
    followTrademark: trademark => dispatch(followTrademark()),
    unfollowTrademark: trademark => dispatch(unfollowTrademark())
})

export default connect(mapStateToProps, mapDispatchToProps)(TrademarksContainer)