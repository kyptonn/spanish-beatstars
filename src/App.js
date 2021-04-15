

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
/* import { InicioSesion } from './pages/InicioSesion'; */
import { AuthProvider } from './contexts/AuthContext';
import Registro from './pages/Registro';
import InicioSesion from './pages/InicioSesion';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile';
import Vender from './pages/Vender';
import SubirBeat from './pages/SubirBeat/SubirBeat.js';

function App() {
  return (
    <AuthProvider>
    <Router>
    <Switch>
    <Route exact path="/" component={Home}/>
    {/* <Route exact path="/iniciar-sesion" component={InicioSesion}/> */}
    <Route path="/registro" component={Registro}/>
    <Route path="/inicio-sesion" component={InicioSesion}/>
    <Route path="/forgot-password" component={ForgotPassword}/>
    
    <PrivateRoute exact path="/panel" component={Dashboard}/>
    <PrivateRoute path="/update-profile" component={UpdateProfile}/>
    <PrivateRoute path="/vender" component={Vender}/>
    <PrivateRoute path="/subir-beat" component={SubirBeat}/>
   
    
    
    <Redirect to="/404" />  
    </Switch>
  </Router>
  </AuthProvider>
  );
}

export default App;
