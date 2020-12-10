import './App.css';
import NavBar from './components/navigation/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/navigation/Home';
import TrademarkSearch from './components/trademarks/TrademarkSearch';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" />
      <Route exact path="/login" />
    </Router>
    </div>
  );
}

export default App;
