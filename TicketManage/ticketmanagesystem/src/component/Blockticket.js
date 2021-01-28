import React from 'react'

class Blockticket extends React.Component {
    // sum ;
//    count =1 ;
    constructor(props){
        super(props);
        this.state ={
            tableDiv :[],
            count : 1
        }
    }
    componentDidMount() {
        this.getlocalStorageData();
    }
    
    getlocalStorageData = () => {
        var ticketsArr = JSON.parse(localStorage.getItem('allTickets'));
        this.setState({ tableDiv: ticketsArr })
        console.log(this.state.tableDiv)
    }
    render(){
        return(
            <div>
              {this.state.tableDiv.map((item ,index )=>{
                //    this.setState({count : index+1})
                if(item.status =="Open"){
                    return (<div> 
                        {/* {count+1} */}
                      
                        {"index" + ++index  +";"}
                         {item.issueNumber} 
                         {/* {this.state.count} */}
                         <hr />
                          </div>)
                }
                // { this.setState({count : index+1})}
                 
              })}
               {/* <p>{this.state.count}</p> */}
            </div>
        )
    }
}

export default Blockticket ;