import React from 'react';

class Newticket extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allTickets: [],
            currentTicket: {
                contact:'',
                compCode :'',
                subj: '',
                discription: '',
                issueDate: '',
                assignedTo: '',
                status: 'Open',
                type :'',
                Priority :'',
                group :'',
                id : 1,
                issueNumber: 'Tk-'+1,
                time : new Date(),

            },
            agentArray :[],
            count:0 ,
        }
    }
    handleInput = (event, field) => {
        var ticket = this.state.currentTicket;
        ticket[field] = event.target.value;
        this.setState({ currentTicket: ticket })
    }

    handleFormSave = (event) => {
        this.addTicketToLocalStorage();
    }

    getAllTicketsFromLocalStorage = () => {
        //  var tickets = JSON.parse(localStorage.getItem('allTickets'));
         var tickets = JSON.parse(localStorage.getItem('allTicketsNewList'));
        var agentsList = JSON.parse(localStorage.getItem('AgentList'))

        if (tickets == null) {
            tickets = [];
            //  localStorage.setItem('allTickets', JSON.stringify(tickets))
             localStorage.setItem('allTicketsNewList', JSON.stringify(tickets))
        }
        this.setState({agentArray : agentsList})
        this.setState({ allTickets: tickets })

        console.log(this.state.currentTicket.time)
        console.log(this.state.currentTicket.time.toLocaleString().split(','));
        // console.log(this.state.currentTicket.time.getHours())
        // console.log(this.state.currentTicket.time.getTime())
        // console.log(this.state.currentTicket.time.getDay())
        // console.log(this.state.currentTicket.time.getMinutes())
        // console.log(24 - this.state.currentTicket.time.getHours() +"hours")
        // console.log(this.state.currentTicket.time.getFullYear())

    }

    componentDidMount() {
        this.getAllTicketsFromLocalStorage();
       
    }

    addTicketToLocalStorage = () => {
        this.setState({count :(this.state.count+1)})
        var ticketId = this.state.currentTicket.id ;
        // var ticket = this.state.currentTicket;
        this.state.currentTicket.id = this.state.currentTicket.id+1;
        // this.setState({ currentTicket: ticket })
        this.setState({ticketId : this.state.count})
        console.log(this.state.currentTicket.id)
        //  var tickets = JSON.parse(localStorage.getItem('allTickets'));
         var tickets = JSON.parse(localStorage.getItem('allTicketsNewList'));
        tickets.push(this.state.currentTicket);
        //  localStorage.setItem('allTickets', JSON.stringify(tickets))
         localStorage.setItem('allTicketsNewList', JSON.stringify(tickets))
        
        // this.setState({ allTickets: ticketDetails })
        this.setState({ count : (this.state.count+1)})
        console.log(this.state.count)
       this.clearForm();
    }

    clearForm = () => {
        this.setState({
            currentTicket: {
            contact:'',
            issueNumber: '',
            compCode :'',
            subj: '',
            discription: '',
            assignedTo: '',
            status: '',
            type: '',
            Priority :'' ,
            group :''
        }
        })

    }

    render() {
        return (
            <div className="allPageDivWidth">
                <h5 className=" pageSubTitle "> Add New Ticket </h5>
                <div className="ticketform">
                     {/* <div className="issueComp">
                     <div>
                    </div>
                     </div> */}
                     <label>Contact (Email)</label>
                    <input className="form-control "
                        value={this.state.currentTicket.contact} onChange={(event) => { this.handleInput(event, 'contact') }} />
                     
                     <label>Company Name  </label>
                    <select className="form-control "
                        value={this.state.currentTicket.compCode} onChange={(event) => { this.handleInput(event, 'compCode') }} >
                        <option> ABC </option>
                        <option> Xcdify</option>
                    </select>
                    <label> Ticket Subject </label>
                    <input className="form-control"
                        value={this.state.currentTicket.subj} onChange={(event) => { this.handleInput(event, 'subj') }} />
                    <label> Description </label>
                    <textarea className="form-control"
                        value={this.state.currentTicket.discription} onChange={(event) => { this.handleInput(event, 'discription') }} />
                     <div className="dateDiv">
                      
                       {/* <div>
                       <label >Created Date </label>
                       <input className="form-control " type="date"
                        value={this.state.currentTicket.createdDate} onChange={(event) => { this.handleInput(event, 'createdDate') }} />
                       </div> */}
                        {/* <div>
                        <label >Expected Date </label>
                        <input className="form-control ml-2" type="date"
                            value={this.state.currentTicket.endDate} onChange={(event) => { this.handleInput(event, 'endDate') }} />
                        </div> */}
                     </div>
                   <label> Assigned To (Agent)</label>
                    {/* <input className="form-control"
                        value={this.state.currentTicket.assignedTo} onChange={(event) => { this.handleInput(event, 'assignedTo') }} /> */}
                     <select className="form-control" onChange={(event) => { this.handleInput(event, 'assignedTo') }}>
                      <option >_ _</option>
                      {
                          this.state.agentArray.map(item =>{
                             return <option>{item.user}</option>
                          })
                      }
                   </select>
                    {/* <label > Assigned By </label>
                    <input className="form-control"
                        value={this.state.currentTicket.assignedBy} onChange={(event) => { this.handleInput(event, 'assignedBy') }} /> */}
                    <label> Status</label>
                    <select className="form-control"
                        value={this.state.currentTicket.status} 
                        onChange={(event) => { this.handleInput(event, 'status') }} >
                        <option> Open </option>
                        <option> Resolved </option>
                        <option> Pending </option>
                        <option> Closed </option>
                    </select>
                     <label> Type</label>
                    <select className="form-control"
                        value={this.state.currentTicket.type} onChange={(event) => { this.handleInput(event, 'type') }} >
                    <option>Question</option>
                    <option>Incident</option><option>Problem</option>
                    <option>Feature Require</option><option>Refund</option>
                    </select>
                    <label> Priority</label>
                    <select className="form-control"
                        value={this.state.currentTicket.Priority} onChange={(event) => { this.handleInput(event, 'Priority') }} >
                    <option>Low</option>
                    <option>Medium</option><option>High</option>
                    <option>Urgent</option>
                    </select>
                    <label>Group </label>
                    <select className="form-control"
                        value={this.state.currentTicket.group} onChange={(event) => { this.handleInput(event, 'group') }} >   
                    <option >Sales</option>
                    <option>QA</option>
                    <option>Shipping</option>
                    <option>IT</option>
                    </select>
                    <button type="submit"  className="subBtn " onClick={this.handleFormSave}>SUBMIT</button>
                </div>
            </div>
        )
    }
}

export default Newticket;