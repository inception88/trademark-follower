import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../actions/userActions';
import Signup from '../components/users/Signup';
import { Route } from 'react-router-dom';
import Login from '../components/users/Login';

class UsersContainer extends Component {

  render() {
    return (
      <div>
        <Route exact path="/login"> <Login login={this.props.login}/></Route>
        <Route exact path="/signup"> <Signup signup={this.props.signup} /></Route>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })

const mapDispatchToProps = dispatch => {
    return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    logout: user => dispatch({type: 'LOGOUT_USER', id: user.id })
}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)