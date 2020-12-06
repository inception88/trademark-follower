import React, { Component } from 'react';
import { connect } from 'react-redux';

class TrademarksContainer extends Component {

  render() {
    return (
      <div>
        <Trademarks trademarks={this.props.trademarks} followTrademark={this.props.followTrademark} unfollowTrademark={this.props.unfollowTrademark}/>
      </div>
    )
  }
}

const mapStateToProps = ({ trademarks }) => ({ trademarks })

const mapDispatchToProps = dispatch => ({
    followTrademark: text => dispatch({ type: "FOLLOW_TRADEMARK", text }),
    unfollowTrademark: trademark => dispatch({type: 'UNFOLLOW_TRADEMARK', id: trademark.id })
})

export default connect(mapStateToProps, mapDispatchToProps)(TrademarksContainer)