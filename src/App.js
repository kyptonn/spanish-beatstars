

import  { BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect
} from 'react-router-dom';

//Pages
import {Home} from './pages/Home';


import { Navbar } from './components/Navbar';
import logo from './logo.svg';


function App() {
  return (
    
    <Router>
    <Switch>
    <Route exact path="/" component={Home}/>
  
    <Redirect to="/404" />  
    </Switch>
  </Router>
  );
}

export default App;
