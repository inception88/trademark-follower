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
      <Route exact path="/home" component={TrademarkSearch} />
      <Route exact path="/search" component={TrademarkSearch} />
    </Router>
    </div>
  );
}

export default App;
