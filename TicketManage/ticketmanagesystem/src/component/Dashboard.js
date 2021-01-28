import React from 'react';
import './pageStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Ticket from './Ticket';
import { Link, NavLink, Switch, Route } from 'react-router-dom';
// import { createBrowserHistory as history} from 'history';
// import Page3 from './Page3';
// qimport Page4 from './Page4';
import Profile from './Profile';
import { Display } from '../../node_modules/react-bootstrap-icons';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableDiv: [],
            applyData: {
                personName: '',
                ticketGroup: '',
                reCreatedDate: '',
                dueDate: '',
                finalStatus: '',
                textDetail: ''
            },
            appliedTicket: [],
            showResult: 'false',
            // showHideProfile: 'false'
        }
    }

    componentDidMount() {
        this.getlocalStorageData();

    }
    getlocalStorageData = () => {
        // var ticketsArr = JSON.parse(localStorage.getItem('allTickets'));
        var ticketsArr = JSON.parse(localStorage.getItem('allTicketsNewList'));
        this.setState({ tableDiv: ticketsArr })
        // var data = JSON.parse(localStorage.getItem('allTickets'))
        // this.setState({tableDiv : this.state.tableDiv.push(data)})
        console.log(this.state.tableDiv)
    }
    applyOnTicket = (event) => {
        this.setState({ appliedTicket: this.state.applyData });
        console.log(this.state.appliedTicket)
        var selectedTicket = JSON.parse(localStorage.getItem('selectedTicket'));
        // var selectedTicket = JSON.parse(localStorage.getItem('allTicketsNewList'))
        if (selectedTicket == null) {
            selectedTicket = [];
            selectedTicket.push(this.state.applyData)
        }
        selectedTicket.push(this.state.applyData)
         localStorage.setItem('selectedTicket', JSON.stringify(selectedTicket))
        // localStorage.setItem('allTicketsNewList', JSON.stringify(selectedTicket))
        this.clearFrom();
    }
    handleInput = (event, field) => {
        var ticket = this.state.applyData;
        ticket[field] = event.target.value;
        this.setState({ applyData: ticket })
    }
    clearFrom = () => {
        this.setState({
            applyData: {
                personName: '',
                ticketGroup: '',
                reCreatedDate: '',
                dueDate: '',
                finalStatus: '',
                textDetail: ''
            },
        })
    }
    // handleAction = (event) => {
    //     this.setState({ showHideProfile: !this.state.showHideProfile });
    // }
    render() {
        // const { showHideProfile, showHideTicket } = this.state;
        return (

            <div>

                <div className="flexDiv">
                    <div className="secondsideDiv">
                        <div>
                            <h5 className="pageSubTitle">All Tickets </h5>
                        </div>
                        <div className="insideSecondDiv">
                            <div className="emailDetailBox mb-2">
                                {
                                    this.state.tableDiv.map((item) => {
                                        return (
                                            <div className="emailContainer">
                                                <div>
                                                    {/* <input className ="mt-1 pl-2" type="checkbox" /> */}
                                                </div>
                                                <div className="widthEmailDiv" >
                                                    <h6> Tickets : {item.subj}</h6>
                                                    <p> Details : {item.discription}</p>
                                                    <div className="divflex">
                                                        {/* <div>
                                                            <button className='subBtn mt-1' value='Action'
                                                                onClick={() => this.handleAction(this.target)}>
                                                                Action
                                                           </button>
                                                        </div>
                                                        <div>
                                                            {showHideProfile && <Profile />}
                                                            <hr />
                                                        </div> */}
                                                    </div>
                                                </div>
                                                <div className="btnTxtDiv">
                                                    <select className="status">
                                                    <option>{item.status}</option>
                                                    <option>Open</option>
                                                    <option>Closed</option>
                                                    </select>
                                                    {/* <button className="subBtn mt-0"> */}
                                                    {/* <Link to="./Ticket">View<Switch className="switchWidth">
                                                  <Route exact path ='/' component={Dashboard}/>
                                                  </Switch></Link> */}
                                                    {/* <NavLink   exact activeClassName="active_class"  to= "./Ticket"> */}
                                                    {/* <button className="btn btn-secondary"> Home</button></NavLink></button> */}
                                                    {/* <textarea onChange={(event) => { this.handleInput(event, 'textDetail') }} /> */}
                                                </div>
                                            </div>)
                                    })
                                }
                                <div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="thirdsideDiv">
                      <h5>Filter</h5>
                        <select className="form-control">Group
                            <option>QA</option><option>Product Management</option>
                            <option>Sales</option>
                            <option>UnAssigned</option><option>Escalations</option>
                        </select>
                        {/* <label>Agents</label>
                        <input placeholder="Any" className="form-control" onChange={(event) => { this.handleInput(event, 'personName') }}/> */}
                        <label>Categories </label>
                        <input placeholder="Any" className="form-control" onChange={(event) => { this.handleInput(event, 'ticketGroup') }} />
                        <label>Created</label>
                        <select>
                            <option>Today</option>
                            <option>Today</option>
                            <option>Today</option><option>Today</option><option>Today</option>
                        </select>
                        <input placeholder="Any" type="date" className="form-control" onChange={(event) => { this.handleInput(event, 'reCreatedDate') }} />
                        <label> Resolution due by </label>
                        <input placeholder="Any" type="date" className="form-control" onChange={(event) => { this.handleInput(event, 'dueDate') }} />
                        <label> Latest Status </label>
                        <input placeholder="Any" className="form-control mb-4" onChange={(event) => { this.handleInput(event, 'finalStatus') }} />

                        <button className=" mt-3 mb-2 subBtn " onClick={this.applyOnTicket} > Apply</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Dashboard;


{/* <div className="mailBox">
                        <input type="checkbox" />
                        <div></div>
                    </div> */}
{/* <div className="dropdown">
    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
    <span className="caret"></span></button>
    <ul className="dropdown-menu">
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">JavaScript</a></li>
    </ul>
  </div> */}
{/* {this.state.showResult?<button>Delete </button> : null} */ }
{/* onClick={() => this.hideComponent("showHidePage5") */ }