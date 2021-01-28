import React from 'react';
import ReactDOM from 'react-dom' ;
import {Switch , Route ,Link ,BrowserRouter ,Router} from 'react-router-dom';



import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
// import Notfound from './components/Notfound'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle/>
                <SideNav.Nav defaultSelected="page1">
                    <NavItem eventKey="">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="page2">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Shop by Category
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="page3">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Today's Deals
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="page4">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Your Orders
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="page5">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Your Account
                        </NavText>
                    </NavItem>
                    
                </SideNav.Nav>

            </SideNav>
            <Switch>
                <Route exact path="/" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3" component={Page3} />
                <Route path="/page4" component={Page4} />
                <Route path="/page5" component={Page5} />
                {/* <Route  component={Notfound} /> */}
               
            </Switch>
        </React.Fragment>
    )}
    />
</Router>

)


ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();