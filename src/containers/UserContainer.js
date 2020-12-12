import React, { Component } from 'react';
import { connect } from 'react-redux';
import Signup from '../components/users/Signup';
import { Route } from 'react-router-dom';

class UsersContainer extends Component {

  render() {
    return (
      <div>
        <Route exact path="/signup"> <Signup /></Route>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })

const mapDispatchToProps = dispatch => ({
    signup: text => dispatch({ type: "CREATE_USER", text }),
    login: user => dispatch({type: 'LOGIN_USER', id: user.id }),
    logout: user => dispatch({type: 'LOGOUT_USER', id: user.id })
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)