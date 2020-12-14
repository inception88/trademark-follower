import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, login, logout } from '../actions/userActions';
import Signup from '../components/users/Signup';
import { Route } from 'react-router-dom';
import Login from '../components/users/Login';
import Logout from '../components/users/Logout';


class UsersContainer extends Component {

  render() {
    return (
      <div>
        <Route exact path="/login"> <Login authenticated={this.props.authenticated} login={this.props.login}/></Route>
        <Route exact path="/signup"> <Signup signup={this.props.signup} /></Route>
        <Route exact path="/logout"> <Logout logout={this.props.logout} /></Route>
      </div>
    )
  }
}

const mapStateToProps = ({ authenticated }) => ({ authenticated })

const mapDispatchToProps = (dispatch) => {
    return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)