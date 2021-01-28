import React from 'react'
// import { isTemplateElement } from '../../node_modules/@babel/types';
// import { userService, authenticationService } from '@/_services'

class Trackman extends React.Component{
    constructor (props){
        super(props);
        this.state={
          localAllTickets :[],
          ticketId :'',
          filterTicket :[],
        }
    }
    componentDidMount =()=>{
        // var getAllTicket = JSON.parse(localStorage.getItem('allTickets'));
        var getAllTicket = JSON.parse(localStorage.getItem('allTicketsNewList'));
        
        this.setState({
            localAllTickets :getAllTicket
            // .sort((a,b)=>{return a.issueNumber - b.issueNumber})

        })
    }
    
    filterId = (event)=>{
      var inputTicket = event.target.value ;
      this.setState({ticketId :inputTicket});
      
      this.setState({filterTicket : this.state.localAllTickets.filter((item)=>{
        this.setState.filterTicket =[];
        if(item.status.includes(inputTicket) ){
            return (this.state.filterTicket.push(item))
        } 
        else{
            return null;
        }
    })})
    //   this.state.localAllTickets.filter(function(item){
    //       this.setState({filterTicket :[]});
    //       if(item.issueNumber.includes(inputTicket)){
    //         return (this.setState({filterTicket :item}))
    //       }
    //   })
    }

    render(){
     return (
         <div className="trackDiv">
             <h5 className="pageSubTitle"> Track Any Ticket</h5>
             <div className="tickAssign">
                 {/* <div>
                <label> Ticket Id </label>
                <input className="form-control" onChange={this.filterId}/>
                </div> */}
                <div>
                <label> Assigned Date </label>
                <input type="date" className="form-control" onChange={this.filterId}/>
                 </div>
                 <div>
                <label> Assigned To </label>
                <input  className="form-control" onChange={this.filterId}/>
                 </div>
                 <div>
                <label> Status </label>
                <input  className="form-control" onChange={this.filterId}/>
                 </div>
             </div>
             {/* <label>Email </label>
             <input className="form-control"/> */}
             <table className="table mt-3">
             <thead>
                 <tr>
                 <td>ID</td>
                 <td>Subject</td>
                 <td>Discription</td>
                 <td>Assigned To</td>
                 <td>Group</td>
                 <td>Priority</td>
                 <td>Status</td>
                 </tr>
             </thead>
             <tbody>
                 {
                   
                     this.state.filterTicket.map(function(item ,index){
                        //  ( {id = this.state.inputTicket}   )
                        //  var id = item.issueNumber +item.compCode
                        //   var getId = {this.state.ticketId}
                        //  if(item.issueNumber == 3){
                            return(<tr>
                                <td>{index}</td>
                                
                                   <td>{item.subj}</td>
                                   <td>{item.discription}</td>
                                   <td>{item.assignedTo}</td>
                                   <td>{item.group}</td>
                                   <td>{item.Priority}</td> 
                                   {/* <td>{item.createdDate}</td>  */}
                                   <td>{item.status}</td>    
                                </tr>)
                        //  }
                     })
                 }
             </tbody>
             </table>
         </div>
     )   
    }
}

export default Trackman;