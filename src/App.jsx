import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'


function App() {
  return (
    <Router>

       <div className="container mt-5">
     <Navbar/>
      <Switch>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/admin'>
        Admin...
      </Route>
      <Route path='/'>
        Inicio...
      </Route>
      </Switch>




    </div>
    </Router>
   
  );
}

export default App;
