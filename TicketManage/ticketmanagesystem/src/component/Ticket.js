import React from 'react';
import {Link ,NavLink} from 'react-router-dom';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Ticket extends React.Component{
    constructor(props){
      var allTicketLocalstored ;
        super(props);
        this.state ={
            selectedTicketId :'',
            selectedTicketArray :[],
            // allTicketLocalstored : [],
            selectedText : '',
            updateTicketComment :''
        }
    }
    componentDidMount(){
        this.getLocaTicketId()
    }
    getLocaTicketId =() =>{
        var ticketId = JSON.parse(localStorage.getItem('ticketKey'));
        var allTicketLocalstored = JSON.parse(localStorage.getItem('allTickets'))
        this.setState({
            selectedTicketId : ticketId,
            selectedTicketArray : allTicketLocalstored
        })
        console.log(allTicketLocalstored)
        console.log(this.state.selectedTicketArray)
    }
    addStatus =()=>{
        // this.setState({updateTicketComment : })
        // var allTicketLocalstored = JSON.parse(localStorage.getItem('allTickets'))  
        this.state.selectedTicketArray.map((item)=>{
             if(item.issueNumber == this.state.selectedTicketId){
                 item.comment = this.state.selectedText ;
             }
            }
        )
        console.log(this.state.selectedTicketArray)
    }
    textInput =(e) =>{
       this.setState({
           selectedText : e.target.value 
       })
       console.log(this.state.selectedText)
    }
    render(){
        return (
            <div className='reviewContainer'>
                <h5 className ="pageSubTitle">Ticket Review</h5>
                <div className="reviewTicket">
                {/* <FontAwesomeIcon icon={faHome} /> */}
                    {/* <button className="backBtn btn  ">
                    <Link to ="./User"> {'<'}</Link></button> */}
                    <NavLink   exact activeClassName="active_class"  to= "./Home2">
                    <button className="subBtn mt-1 "> Back </button></NavLink>
                    <NavLink   exact activeClassName="active_class"  to= "/">
                    <button className="subBtn mt-1"> Home</button></NavLink>
                </div>
                {
                    this.state.selectedTicketArray.map((item) =>{
                        if(item.issueNumber == this.state.selectedTicketId){
                          return (
                              <div className="viewTicketContainer">
                                  <h5> {item.subj}</h5>
                                  <p> Created By : {item.assignedBy}</p>
                                  <p>Ticket Number : {item.issueNumber}</p>
                                   <div>
                                   <p>Subject : {item.discription}</p>
                                   </div>
                                    <label> Add Comments </label>
                                    <textarea  className ="reviewTextarea" onChange ={this.textInput}/>
                                    <button className="subBtn btnWidth" onClick={this.addStatus}> Add Status</button>
                              </div>
                          )
                        }
                        // return(
                          
                        //     <div>
                        //         {/* if( item.issueNumber == this.state.selectedTicketId ) <div> */}
                        //     <h4> {item.issueNumber}</h4>
                        //     <p>{item.subj}</p>
                        //     </div>
                        //     // </div>
                        // )
                        
                    })
                }
                {/* <button> */}
                    {/* <button>
                    <Link to ="./User">Back</Link></button>
                    <NavLink   exact activeClassName="active_class"  to= "/">
                     <button className="btn btn-secondary"> Home</button></NavLink> */}
                {/* </button> */}
            </div>

        )
    }
}

export default Ticket ;