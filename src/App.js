import './App.css';
import NavBar from './components/navigation/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/navigation/Home';
import Signup from './components/users/Signup';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" />
    </Router>
    </div>
  );
}

export default App;
