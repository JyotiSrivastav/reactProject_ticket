import React from 'react';
import {Link ,NavLink,Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Ticket from './Ticket'
class Home2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableDiv: [],
        }
    }
    componentDidMount() {
        this.getTableDatafromLocal()
    }
    getTableDatafromLocal = () => {
        var ticketsArr = JSON.parse(localStorage.getItem('allTickets'))
        // this.setState ({tableDiv : this.state.tableDiv.push(ticketsArr)});
        this.setState({ tableDiv: ticketsArr })
        console.log(this.state.tableDiv)
    }
    clickTicket=(e)=>{
     var ticket = e.target.id ;
    // p console.log(ticket)
    //  alert("helo" +ticket)
     localStorage.setItem('ticketKey' ,JSON.stringify(ticket))
        // <NavLink   exact activeClassName="active_class"  to= "/Ticket"></NavLink>
            // <Route exact path ='/' component={() =><Ticket name={this.props}/>}/>
                             
    }
    render() {
        return (
            <div className="homeDiv">
                <div >
                    <h5 className="pageSubTitle">Ticket Response</h5>
                    {
                        this.state.tableDiv.map((item) => {
                            return ( <div className="home2Div" id={item.issueNumber}>
                            <h6> Tickets : {item.subj}</h6>
                             <p> Details : {item.discription}</p>
                             <NavLink   exact activeClassName="active_class"  to= "/Ticket" id={item.issueNumber}>
                             {/* <div className ="routeDiv"> Home</div> */}
                             <div onClick={this.clickTicket} id={item.issueNumber} > Action  </div>
                             </NavLink>
                             <Route exact path ='/' component={() =><Ticket name={this.props}/>}/>
                             </div>)
                        })
                    }
                </div>

            </div>
        )
    }
}

export default Home2