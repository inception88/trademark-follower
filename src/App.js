import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navigation/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/navigation/Home';
import UserContainer from './containers/UserContainer';

class App extends Component {

  render() {return (
    <div className="App">
    <Router>
      <NavBar loggedIn={this.loggedIn}/>
      <Route exact path="/" component={Home} />
      <UserContainer/>
    </Router>
    </div>
  );
}
};

export default App;
