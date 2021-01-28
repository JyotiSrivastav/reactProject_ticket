import React from 'react'
import { isTemplateElement } from '../../node_modules/@babel/types';
import './pageStyle.css'
import {Bar, Line, Pie} from 'react-chartjs-2';

class Graph extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ticketsList : [],
            counter : 1,
            countOpen:0 ,
            countClose:0,
            countUnAssign :0,
            countResolved :0,
            chartData : {
                labels :['Solved','UnSolved','Closed','Open'],
                datasets :[
                    {
                     label :'Ticket',
                     data: [],
                     backgroundColor :[  'olive' ,'red' ,'pink' ,'green','#db3d44']
                    }
                ]
            }
        }
    }
    componentDidMount(){
       this.getAllTicketsFromLocalStorage()
    }
    getAllTicketsFromLocalStorage =()=>{
        var tickets = JSON.parse(localStorage.getItem('allTicketsNewList'));
        console.log(tickets)
        // this.state.ticketsList.push(tickets)
         this.setState({ticketsList : tickets})
        // var i = i++ ;
        // this.setState((prevState ,props)=>({counter : prevState.counter +1}));
        // console.log(this.state.counter)
          this.openTicketCount(tickets);
          this.closedTicketCount(tickets);
          this.resolvedTicketCount(tickets);
          this.unAssignedTicketCount(tickets);
          this.pieDataset(tickets);
    }
    openTicketCount =(tickets)=>{
        var i = 0;
        // var tickets = JSON.parse(localStorage.getItem('allTicketsNewList'));
        // this.state.ticketsList.push(tickets)
        //  this.setState({ticketsList : tickets});
        // console.log(this.state.ticketsList)
        tickets.map((item,index)=>{
           
            if(item.status == "Open"){
                i =i+1;   
            }
          
        })
        this.setState({countOpen: i});
        console.log("count item :"+ i)
        var dataOfPie = this.state.chartData.datasets[0].data;
        this.setState({dataOfPie : dataOfPie.push(i)})
        console.log(i)
    
    }

    closedTicketCount =(tickets)=>{
        var j = 0;
        // var tickets = JSON.parse(localStorage.getItem('allTicketsNewList'));
        // this.state.ticketsList.push(tickets)
        // this.setState({ticketsList : tickets});
        // console.log(this.state.ticketsList)
        tickets.map((item,index)=>{
           
            if(item.status == "Closed"){
                j = j+1;
            }
        })
        this.setState({countClose: j});
        console.log("count item :"+ j)
        var dataOfPie = this.state.chartData.datasets[0].data;
        this.setState({dataOfPie : dataOfPie.push(j)})
        console.log(j)

    }

    resolvedTicketCount =(tickets)=>{
        var k= 0;
        // var tickets = JSON.parse(localStorage.getItem('allTicketsNewList'));
        // this.state.ticketsList.push(tickets)
        // this.setState({ticketsList : tickets});
        // console.log(this.state.ticketsList)
        tickets.map((item,index)=>{
           
            if(item.status == "Resolved"){
                k = k+1;
            }
        })
        this.setState({countResolved: k});
        console.log("count item :"+ k)
        var dataOfPie = this.state.chartData.datasets[0].data;
        this.setState({dataOfPie : dataOfPie.push(k)})
        console.log(k)
    }
 
    unAssignedTicketCount =(tickets)=>{
        var z= 0;
         var tickets = JSON.parse(localStorage.getItem('allTicketsNewList'));
        // this.state.ticketsList.push(tickets)
        // this.setState({ticketsList : tickets});
        // console.log(this.state.ticketsList)
        tickets.map((item,index)=>{
           
            if(item.status == "Pending"){
                z = z+1;
            }
        })
        this.setState({countUnAssign: z});
        console.log("count item :"+ z)
        console.log(this.state.countUnAssign)
        var dataOfPie = this.state.chartData.datasets[0].data;
        this.setState({dataOfPie : dataOfPie.push(z)})
        console.log(z)
    }
  
    pieDataset =(tickets )=>{
        var dataOfPie = this.state.chartData.datasets[0].data;
        // countOpen:0 ,
        // countClose:0,
        // countUnAssign :0,
        // countResolved :0,
        var opentTick= this.state.countOpen ;
        var closeTick =this.state.countClose;
        var resolvedTick =this.state.countResolved ;
        var unassignTick = this.state.countUnAssign;
        console.log(this.state.unAssignedTicketCount)
        this.setState({dataOfPie : dataOfPie.push(opentTick,closeTick,resolvedTick,unassignTick)})
    }

    render(){
        return(
            <div>
                <h5 className=" pageSubTitle ">DashBoard </h5>
                <div className="divContainerFlex">
                    <div className="openTicketContainer">Open Tickets
                    <p> {this.state.countOpen}</p>
                    </div>
                    <div  className="openTicketContainer">Closed Tickets
                     {/* <p>counterTicket :{this.state.counter}</p> */}
                     <p>{this.state.countClose}</p>
                    </div>
                    <div  className="openTicketContainer">Resolved Tickets
                    <p>{this.state.countResolved}</p>
                    </div>
                    <div  className="openTicketContainer">UnResolved Tickets
                    <p>{this.state.countUnAssign}</p>
                    </div>
                </div>
                <div>
                    
                <Pie
                  data = {this.state.chartData }
                  
                  options ={{
                  maintainAspectRatio : false
                 }} />
                </div>

            </div>
        )
    }
}
export default Graph ;

// return(
                    // this.setState({counter :this.state.counter +1})
                    // this.setState((prevState ,props)=>({counter : prevState.counter +1}))
                // )