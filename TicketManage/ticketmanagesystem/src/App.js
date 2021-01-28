import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import Home1 from './Home1.js';
import Conatct1 from './Conatct1';
import Menu from './Menu';
import './App.css'
// import Error from './Error';

function App() {
  return (
    <div className="App">
     <h1>Ticket Management System  </h1>
     <Menu />
     <Switch>
       <Route exact path ='/' component={Home1}/>
       <Route exact path ='/conatct1' component={Conatct1}/>
       {/* <Route component={Error}/> */}

       </Switch>
     {/* <Home1 />
     <Conatct1 /> */}
    </div>
  );
}

export default App;
