import React from 'react';
import {Link ,NavLink} from 'react-router-dom';
// import './index.css';
// import './App.css';
// import { Sidenav } from 'rsuite';
import { ArrowRight  } from 'react-bootstrap-icons';


class Menucomponent extends React.Component {
    constructor(props){
        super(props);
        this.divRef =React.createRef()
        this.state ={
            selectedButton: null 
        }
        this.selectionOnPress = this.selectionOnPress.bind(this);
    }
    selectionOnPress(userType) {
        this.setState({ selectedButton: userType });
    }
    onClick =()=>{
        this.divRef.current.focus();
        this.inputRef.focus();
    }
    render(){
        return (
            <div className="menuStyle Navbar">
                {/* <h1> hi menu </h1> */}
                {/* <Link to="/"> About </Link>
                <Link to='/contact1'> Contact Us</Link> */}
                {/* <NavLink  onClick={()=> this.selectionOnPress("Hom")}
                 exact activeClassName="active_class"  to= "/">
               <div className ="routeDiv"
               style ={{ backgroundColor : this.state.selectedButton === "Hom" ?"#218c8d" :"cadetblue"}}> Home</div> */}
               {/* <ArrowRight /> */}
               {/* <faHome /> */}
                {/* </NavLink> */}
                    {/* <NavLink onClick={()=> this.selectionOnPress("Chart")}
                    exact activeClassName="active_class" to="/Chart" > */}
                    {/* <button className="btn btn-warning">Dashboard</button> */}
                    {/* <div className ="routeDiv" 
                    style ={{ backgroundColor : this.state.selectedButton === "Chart" ?"#218c8d" :"cadetblue"}}>
                     Graph</div> 
                     </NavLink>  */}
                    <NavLink  onClick={()=> this.selectionOnPress("Tickfilter")}
                    exact activeClassName="active_class"  to= "/Tickfilter">
                     <div className ="routeDiv"
                     style ={{ backgroundColor : this.state.selectedButton === "Tickfilter" ?"#218c8d" :"cadetblue"}}> Tickets</div>
                   </NavLink>
                    {/* <NavLink onClick={()=> this.selectionOnPress("User")}
                    exact activeClassName="active_class"  to="/user"> */}
                    {/* <button className="btn btn-danger">user</button> */}
                    {/* <div className ="routeDiv"  */}
                    {/* // ref={this.divRef} onClick ={this.onClick} */}
                    {/* style ={{ backgroundColor : this.state.selectedButton === "User" ?"#218c8d" :"cadetblue"}}> Profile</div>
                    </NavLink> */}
                    <NavLink onClick={()=> this.selectionOnPress("Add")}
                    exact activeClassName="active_class"  to="/newticket">
                    <div style ={{ backgroundColor : this.state.selectedButton === "Add" ?"#218c8d" :"cadetblue"}}
                    className ="routeDiv"> Add</div>
                    </NavLink>
                    <NavLink onClick={()=> this.selectionOnPress("View")}
                    exact activeClassName="active_class" to='/Viewalltickets'>
                    {/* <button className="btn btn-success" > View Tickets</button> */}
                    <div style ={{ backgroundColor : this.state.selectedButton === "View" ?"#218c8d" :"cadetblue"}}
                    className ="routeDiv"> Veiw </div>
                    </NavLink>
                    <NavLink onClick={()=> this.selectionOnPress("Trackman")}
                    exact activeClassName ='active_class' to='/Trackman'>
                    <div className ="routeDiv"
                    style ={{ backgroundColor : this.state.selectedButton === "Trackman" ?"#218c8d" :"cadetblue"}}> Track</div>
                    </NavLink>
                    <NavLink  onClick={()=> this.selectionOnPress("Home2")} 
                    exact activeClassName="active_class"  to= "/Home2">
                     <div className ="routeDiv"
                     style ={{ backgroundColor : this.state.selectedButton === "Home2" ?"#218c8d" :"cadetblue"}}> Response</div>
                   </NavLink>
                      
                   {/* <NavLink  onClick={()=> this.selectionOnPress("Block")}
                    exact activeClassName="active_class"  to= "/Blockticket">
                     <div className ="routeDiv"
                     style ={{ backgroundColor : this.state.selectedButton === "Block" ?"#218c8d" :"cadetblue"}}> Block </div>
                   </NavLink> */}
                   <NavLink  onClick={()=> this.selectionOnPress("Individual")} 
                    exact activeClassName="active_class"  to= "/Admin">
                     <div className ="routeDiv" 
                     style ={{ backgroundColor : this.state.selectedButton === "Individual" ?"#218c8d" :"cadetblue"}}> Admin </div>
                   </NavLink>
                   <NavLink  onClick={()=> this.selectionOnPress("Graph")} 
                    exact activeClassName="active_class"  to= "/Graph">
                     <div className ="routeDiv" 
                     style ={{ backgroundColor : this.state.selectedButton === "Graph" ?"#218c8d" :"cadetblue"}}> DashBoard </div>
                   </NavLink>    

            </div>
        )
    }
}

export default Menucomponent


//    ref={ref => { this.inputRef = ref; }}onClick={this.onClick} */}