import React, {Component} from 'react';
import './pageStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Bar, Line, Pie} from 'react-chartjs-2';
// import './pageStyle.css'
// import { EyeSlashFill } from '../../node_modules/react-bootstrap-icons';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state ={
            simpleData :[],
            openTicketcount:'',
            closedTicketcount :'',
            resolvedTicketcount :'',
            unresolvedTicketcount :'',
            chartData : {
                labels :['Total','Solved','UnSolved','UnAssigned','ReOpen'],
                datasets :[
                    {
                     label :'Ticket',
                     data: [
                         
                     ],
                     backgroundColor :[
                         'olive' ,'red' ,'pink' ,'green','#db3d44'
                     ]
                    }
                ]
            }
        }
    }
    componentDidMount(){
        var i=0 , j=0, k=0, z=0 ;
      var show=  this.state.chartData.datasets[0].data;
      console.log(show)
      
      show.push(6);
      show.push(90)
      var dataOfTicket = JSON.parse(localStorage.getItem('allTicketsNewList'))
      this.state.simpleData.push(dataOfTicket) 
     
      
      dataOfTicket.map((item,index)=>{
           
        if(item.status == "Pending"){
            z = z+1;
        }
    })
    this.setState({show : show.push(z,80,90,20)})
    this.setState({closedTicketcount: z});
    console.log(this.state.closedTicketcount)
    //   dataOfTicket.map((item)=>{
    //       if(item.status == 'Open'){
    //          i=i+1 ;   
    //       }
    //       else if(item.status == 'Closed'){
    //           j=j+1  
    //       }
    //       else if(item.status == 'Pending'){
    //           z=z+1
    //           console.log(z)
    //       }
    //       else{
    //           k=k+1
    //           console.log(k)
    //       }
        
    //   }) 
    //   this.setState({openTicketcount :i })
    //   console.log(this.state.openTicketcount)
    //   console.log(this.setState({closedTicketcount:j}))
    //   console.log(this.state.simpleData)
    //   console.log(dataOfTicket)
    }
    render(){
        return(
            <div className="chart">
            <Pie
              data = {this.state.chartData}
              options ={{
                  maintainAspectRatio : false
            }} />
             <Line
              data = {this.state.chartData}
              options ={{
                  maintainAspectRatio : false
            }} />

            </div>
        )
    }
}

export default Chart ;