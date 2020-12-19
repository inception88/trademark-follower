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

const mapStateToProps = ({ token }) => ({ token })

const mapDispatchToProps = dispatch => ({
    followTrademark: trademark => dispatch({ type: "FOLLOW_TRADEMARK", trademark }),
    unfollowTrademark: trademark => dispatch({type: 'UNFOLLOW_TRADEMARK', id: trademark.id })
})

export default connect(mapStateToProps, mapDispatchToProps)(TrademarksContainer)