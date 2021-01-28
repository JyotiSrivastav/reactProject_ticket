import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText ,location ,history} from '@trendmicro/react-sidenav';
import React from 'react'
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import * as Icon from 'react-bootstrap-icons';
// import Home from './Home';
// import Device from './Device';
// import {  FaStar } from 'react-icons/fa';
import { ArrowRight } from 'react-bootstrap-icons';

class Toolmainpage extends React.Component{
    render(){
        return(
            <div> 
                <SideNav
                  onSelect={(selected) => {
        // Add your code here
        const to = '/' + selected;
        if (location.pathname !== to) {
            history.push(to);
        }
              }}
                >
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <i className="ArrowRight" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Setting
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Charts
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Line Chart
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Bar Chart
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
{/* <Router>
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
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="device">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Device
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/" exact component={props => <RootComponent />} />
                <Route path="/home" component={props => <Home />} />
                <Route path="/devices" component={props => <Device />} />
            </main>
        </React.Fragment>
    )}
    />
</Router> */}
            </div>
        )
    }
}
export default Toolmainpage ;