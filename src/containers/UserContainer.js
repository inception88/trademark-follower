import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersContainer extends Component {

  render() {
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })

const mapDispatchToProps = dispatch => ({
    signup: text => dispatch({ type: "CREAT_USER", text }),
    login: user => dispatch({type: 'LOGIN_USER', id: user.id })
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)