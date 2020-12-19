import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navigation/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/navigation/Home';
import UserContainer from './containers/UserContainer';
import { connect } from 'react-redux';
import TrademarkContainer from './containers/TrademarkContainer';

class App extends Component {

  render() {return (
    <div className="App">
    <Router>
      <NavBar authenticated={this.props.authenticated}/>
      <Route exact path="/" component={Home} />
      <Route exact path="/follows" component={TrademarkContainer} />
      <UserContainer />
    </Router>
    </div>
  );
}
};

const mapStateToProps = ({ user }) => ({ authenticated: user.authenticated })

export default connect(mapStateToProps)(App);
