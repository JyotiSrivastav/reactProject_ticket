import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import './App.css';
import Dashboard from './component/Dashboard.js';
import Chart from './component/Chart.js';
import * as serviceWorker from './serviceWorker';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
// import { Router, Route, Link } from 'react-router'
import User from './component/User';
import {BrowserRouter} from 'react-router-dom'
import Mainpage from './component/Mainpage';
import Toolmainpage from './Toolbar/Toolmainpage'
import Page2 from './components/Page2';
// import Admin from './component/Admin';


ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <App />
    </BrowserRouter > */}
    {/* <Admin /> */}
    <BrowserRouter>
    <Mainpage />
    </BrowserRouter >
    {/* <Page2 /> */}
    {/* <Toolmainpage />  */}
    {/* < Toolmainpage /> */}
    {/* <BrowserRouter>
    <Toolmainpage /> 
        {/* <Route path="/" exact component={props => <RootComponent />} />
        <Route path="/home" component={props => <Home />} />
        <Route path="/devices" component={props => <Device />} /> */}
    {/* </Toolmainpage> */}
    {/* </BrowserRouter> */}
    {/* <Dashboard /> */}
    {/* <Chart /> */}
   
    {/* <User> */}
    {/* <Router history = {browserHistory}>
       <Route path = "/" component = {User}>
          <IndexRoute component = {Home} />
          <Route path = "home" component = {Home} />
          <Route path = "about" component = {About} />
          <Route path = "contact" component = {Contact} />
       </Route>
    </Router> */}
     {/* <User /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
