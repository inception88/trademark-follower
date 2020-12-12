import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navigation/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/navigation/Home';
import Login from './components/users/Login';
import UserContainer from './containers/UserContainer';

class App extends Component {

  render() {return (
    <div className="App">
    <Router>
      <NavBar loggedIn={this.loggedIn}/>
      <Route exact path="/" component={Home} />
      <UserContainer/>
      <Route exact path="/login" component={Login}/>
    </Router>
    </div>
  );
}
};

export default App;
