import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from './pages/Home/index';


function App() {
  return (
    <Router>
      <div style={{background:"#1d1d1d"}}>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      <Footer/>
      </div>
     
    </Router>
  );
}

export default App;
