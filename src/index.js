import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './components/navigation/Navbar';
import Home from './components/navigation/Home';
import TrademarkSearch from './components/trademarks/TrademarkSearch';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <App />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={TrademarkSearch} />
      <Route exact path="/search" component={TrademarkSearch} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
