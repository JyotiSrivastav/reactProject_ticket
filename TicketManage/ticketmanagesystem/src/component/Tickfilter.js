import React from 'react';
import './pageStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Bar, Line, Pie } from 'react-chartjs-2';
// import Ticket from './Ticket';
// import { Link, NavLink, Switch, Route } from 'react-router-dom';
// // import { createBrowserHistory as history} from 'history';
// import Page3 from './Page3';
// qimport Page4 from './Page4';
import Profile from './Profile';
import { Display } from '../../node_modules/react-bootstrap-icons';


class Tickfilter extends React.Component {
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
                textDetail: '',
                Priority: '',
                agent :''
            },
            filteredTable :[],
            appliedTicket: [],
            showResult: 'false',
            selectedButton: null 
            // showHideProfile: 'false'
        }
        this.selectionOnPress = this.selectionOnPress.bind(this);
    }
    selectionOnPress(userType) {
        this.setState({ selectedButton: userType });
    }
    componentDidMount() {
        this.getlocalStorageData();

    }
    getlocalStorageData = () => {
        var ticketsArr = JSON.parse(localStorage.getItem('allTickets'));
        this.setState({ tableDiv: ticketsArr })
        // var data = JSON.parse(localStorage.getItem('allTickets'))
        // this.setState({tableDiv : this.state.tableDiv.push(data)})
        console.log(this.state.tableDiv)
    }
    applyOnTicket = (event) => {
        this.setState({ appliedTicket: this.state.applyData });
        console.log(this.state.appliedTicket)
        var selectedTicket = JSON.parse(localStorage.getItem('selectedTicket'));
        if (selectedTicket == null) {
            selectedTicket = [];
            selectedTicket.push(this.state.applyData)
        }
        selectedTicket.push(this.state.applyData)
        localStorage.setItem('selectedTicket', JSON.stringify(selectedTicket));
        // this.setState({tableDiv : })
        this.clearFrom();
    }
    handleInput = (event, field) => {
        var ticket = this.state.applyData;
        ticket[field] = event.target.value;
        this.setState({ applyData: ticket })
    }
    filterTicket =(event) =>{
        console.log(this.state.applyData);
        console.log(this.state.tableDiv)
        var fiterData = this.state.applyData ;
        // var inputTicket = event.target.value ;
    //   this.setState({ticketId :inputTicket});
    //   var filteredTable =this.state.tableDiv ;
      this.setState({filteredTable : this.state.tableDiv.filter((item)=>{
        // this.setState.tableDiv =[];
        if(item.status.includes(fiterData.finalStatus) ){
            return (this.state.filteredTable.push(item))
        } 
        else{
            return null;
        }
    })})
    console.log(this.state.filteredTable) ;
    this.setState({tableDiv :this.state.filteredTable})
    }
    clearFrom = () => {
        this.setState({
            applyData: {
                personName: '',
                ticketGroup: '',
                reCreatedDate: '',
                dueDate: '',
                finalStatus: '',
                textDetail: '',
                Priority :'' },
        })
    }
    
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
                           <div className="emailContainer"  onClick={() => this.selectionOnPress(item.issueNumber)}
                           style={{
                            backgroundColor:
                                this.state.selectedButton === (item.issueNumber)
                                    ? "#eeeeee"
                                    : "white"
                        }} >
                            <div>
                           {/* <input className ="mt-1 pl-2" type="checkbox" /> */}
                           </div>
                           <div className="widthEmailDiv" 
                    //        style={{
                    //     backgroundColor:
                    //         this.state.selectedButton === (item.issueNumber)
                    //             ? "cadetblue"
                    //             : "grey"
                    // }}
                    >
                           <h6> Tickets : {item.subj}</h6>
                           <p> Details : {item.discription}</p>
                            <div className="divflex">
                                                       
                           </div>
                           </div>
                          <div className="btnTxtDiv">
                          <select className="status">
                          <option>{item.status}</option>
                          <option>Open</option>
                          <option>Closed</option>
                          </select>
                          <select className="status">
                          <option>{item.priority}</option>
                          <option>Low</option>
                          <option>High</option>
                          <option>Urgent </option>
                          </select>
                                               
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
                 <label>Group </label>
                    <select className="form-control" onChange={(event) => { this.handleInput(event, 'ticketGroup') }} >
                        <option>QA</option><option>Product Management</option>
                        <option>Sales</option>
                        <option>UnAssigned</option>
                        <option>Escalations</option>
                        <option>Replacement</option>
                        <option>Shipping and Deliver</option>
                    </select>
                        {/* <label>Agents</label>
                        <input placeholder="Any" className="form-control" onChange={(event) => { this.handleInput(event, 'personName') }}/> */}
                    <label>Agents </label>
                    <select placeholder="Any" className="form-control" onChange={(event) => { this.handleInput(event, 'agent') }} >
                      <option>UnAssigned</option>
                      <option>Me </option>
                    </select>
                    <label>Created</label>
                    <select placeholder="Any" type="date" className="form-control" onChange={(event) => { this.handleInput(event, 'reCreatedDate') }} >
                       <option>Today</option>
                       <option>Yesterday</option>
                       <option>30 Days</option>
                    </select>
                      {/* <label> Resolution due by </label> */}
                    <label>Type</label>
                    <select className="form-control" onChange={(event) => { this.handleInput(event, 'dueDate') }}>
                       <option>Any </option>
                       <option>Question</option>
                       <option>Problem </option>
                       <option>Feature Required</option>
                       <option>Refund</option>
                    </select>
                        {/* <input placeholder="Any" type="date" className="form-control" onChange={(event) => { this.handleInput(event, 'dueDate') }} /> */}
                    <label> Status </label>
                    <select placeholder="Any" className="form-control " onChange={(event) => { this.handleInput(event, 'finalStatus') }}>
                    <option>Any </option>
                     <option>Open</option>
                     <option>Close</option>
                     <option>Pending</option>
                     <option>Inprogress</option>
                     <option>Resolved</option><option>UnResolved</option>
                    </select>
                    <label>Priority</label>
                    <select placeholder="Any" className="form-control mb-4" onChange={(event) => { this.handleInput(event, 'Priority') }}>
                       <option>Any </option>
                       <option>Low</option>
                       <option>High</option>
                       <option>Medium</option>
                       <option>Urgent</option>
                     </select>
                    <button className=" mt-3 mb-2 subBtn col-6 " onClick={this.applyOnTicket} > Apply</button>
                    <button className="mt-3 mb-2 subBtn col-6"  onClick={this.filterTicket}> filter </button>
                </div>
             </div>
        </div>
        )
    }
}

export default Tickfilter;



// handleAction = (event) => {
    //     this.setState({ showHideProfile: !this.state.showHideProfile });
    // }
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

{/* <button className="subBtn mt-0"> */}
        {/* <Link to="./Ticket">View<Switch className="switchWidth">
        <Route exact path ='/' component={Dashboard}/>
        </Switch></Link> */}
        {/* <NavLink   exact activeClassName="active_class"  to= "./Ticket"> */}
        {/* <button className="btn btn-secondary"> Home</button></NavLink></button> */}
{/* <textarea onChange={(event) => { this.handleInput(event, 'textDetail') }} /> */}