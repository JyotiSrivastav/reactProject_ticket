import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Route , Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Chart from './Chart';
import Menucomponent from './Menucomponent'
import User from './User';
import Newticket from './Newticket';
import Viewalltickets from './Viewalltickets'
import Trackman from './Trackman';
import Home2 from './Home2';
import Ticket from './Ticket';
import Tickfilter from './Tickfilter';
import Blockticket from './Blockticket';
import Admin from './Admin'
import Email from './Email';
import Company from './Company' ;
import Graph from './Graph';

function Mainpage() {
  return (
    <div >
     <div className=" bg-primary"><h3 className="text-center p-3">Ticket Management System  </h3></div>
     <div className="mainpage">
     <Menucomponent />
     {/* <Router history={history}> */}
      <Switch className="switchWidth">
       <Route exact path ='/' component={Dashboard}/>
       <Route exact path ='/chart' component={Chart}/>
       <Route exact path ='/user' component={User}/>
       <Route exact path ='/newticket' component={Newticket}/>
       <Route exact path ='/viewalltickets' component ={Viewalltickets}/>
       <Route exact path ='/trackman' component ={Trackman} />
       <Route exact path ='/home2' component ={Home2} />
       <Route exact path ='/ticket' component={Ticket}/>
       <Route exact path ='/tickfilter' component={Tickfilter} />
       <Route exact path ='/blockticket' component={Blockticket} />
       <Route exact path ='/admin' component={Admin} />
       <Route exact path ='/email' component={Email} />
       <Route exact path='/company' component={Company} />
       <Route exact path='/graph' component={Graph} />
       {/* <Route exact path ='/chart' component={Chart}/> */}
       {/* <Route component={Error}/> */}

       </Switch>
       {/* </Router> */}
     </div>
    </div>
  );
}

export default Mainpage;
