import './App.css';

import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home  from './pages/Home';



 

function App() {
  
  return (
    <div className="App"onClick={Navbar.closeMenu}>
      <Router>
      
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/> 
        </Switch>
          
      </Router>
      
    </div>
  );
}

export default App;
