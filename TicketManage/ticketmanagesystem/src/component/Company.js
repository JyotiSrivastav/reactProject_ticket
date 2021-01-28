import React from 'react';
import {Link ,NavLink} from 'react-router-dom';
import './pageStyle.css'

class Company extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            companyAdded: {
                user: '',
                location: '',
                company: '',
                // contact: '',
                // email: '',
            },
           
            selectedButton: null 
        }
        this.selectionOnPress = this.selectionOnPress.bind(this);
    }
    selectionOnPress(userType) {
        this.setState({ selectedButton: userType });
    }
    
    handleInput = (event, field) => {
        var currentCompany = this.state.companyAdded;
        currentCompany[field] = event.target.value;
        this.setState({ companyAdded: currentCompany })
    }
    submitHandler = () => {
        var AddedCompany = JSON.parse(localStorage.getItem('AddedCompany'))
        if(AddedCompany == null){
            AddedCompany = [];
            AddedCompany.push(this.state.companyAdded);
        }
        // var loggedCompany = this.state.companyAdded;
        AddedCompany.push(this.state.companyAdded);
        // companyArray.push(this.state.companyAdded);
        localStorage.setItem('AddedCompany', JSON.stringify(AddedCompany))
        this.clear();
    }
    handleClick = (e ) => {
        console.log("this is working fine");
        e.preventDefault();
        e.target.style.backgroundColor = 'blue'
        console.log(e.target);
    }
    clear =()=>{
      this.setState({
        companyAdded: {
            user: '',
            location: '',
            company: '',
        }
      })  
    }
    render() {
        // let btn_class = this.state.whitebg ? "greenBtn" : "subBtn"
        return (
          <div className="bgDiv">
            <div className="settingDiv">   

            <div onClick={()=> this.selectionOnPress("SendEmail")} >
                <NavLink exact activeClassName="active_class"  to= "/Email">
                    <div className="adminBtngroup" style ={{ backgroundColor : this.state.selectedButton === "SendEmail" ?"#eeeee" :"white"}}>
                      New Email
                    </div> 
                </NavLink>
            </div>

            <div onClick={()=> this.selectionOnPress("AddCompany")} >
                <NavLink exact activeClassName="active_class"  to= "/Company">
                    <div className="adminBtngroup" style ={{ backgroundColor : this.state.selectedButton === "AddCompany" ?"#eeeeee" :"white"}}>
                       New Company
                    </div> 
                </NavLink>
            </div>
            
            <div onClick={()=> this.selectionOnPress("AddContact")} >
                <NavLink exact activeClassName="active_class"  to= "/User">
                    <div className="adminBtngroup" style ={{ backgroundColor : this.state.selectedButton === "AddContact" ?"#eeeeee" :"white"}}>
                       New Contact
                    </div> 
                </NavLink>
            </div>
            <div onClick={()=> this.selectionOnPress("AddAgents")} >
                <NavLink exact activeClassName="active_class"  to= "/Admin">
                    <div className="adminBtngroup" style ={{ backgroundColor : this.state.selectedButton === "AddAgents" ?"#eeeeee" :"white"}}>
                       New Agent
                    </div> 
                </NavLink>
            </div>

            {/* <div onClick={() => this.selectionOnPress("CreateGroup")} >
                <NavLink exact activeClassName="active_class"  to= "/Email">
                    <div className="adminBtngroup" style ={{ backgroundColor : this.state.selectedButton === "CreateGroup" ?"cadetblue" :"white"}}>
                       New Group
                    </div> 
                </NavLink>
            </div> */}
            {/* <div onClick={() => this.selectionOnPress("CreateAgent")} >
                <NavLink exact activeClassName="active_class"  to= "/User">
                    <div className="adminBtngroup" style ={{ backgroundColor : this.state.selectedButton === "CreateAgent" ?"cadetblue" :"white"}}>
                       New Agent
                    </div> 
                </NavLink>
            </div> */}

          </div>

         <div className="adminDiv">
              <h5 className="pageSubTitle">Add Company </h5>
                 <label> Name</label>
                    <input className="form-control"
                        onChange={(event) => { this.handleInput(event, 'user') }} />
                 <label> Location </label>
                    <input className="form-control"
                        onChange={(event) => { this.handleInput(event, 'location') }} />
                 <label> Company </label>
                    <input className="form-control"
                        onChange={(event) => { this.handleInput(event, 'company') }} />
                 {/* <label> Contact </label>
                    <input className="form-control"
                        onChange={(event) => { this.handleInput(event, 'contact') }} />
                 <label> Email </label>
                    <input className="form-control"
                        onChange={(event) => { this.handleInput(event, 'email') }} /> */}
                 <button className="subBtn" onClick={this.submitHandler} >Add Company </button>
          </div>

      </div>
      )
    }
}
export default Company ;




 {/* <button className={btn_class} id="bt1"
                        onClick={this.changeBgcolor}> Create Group </button>
                    <button className={btn_class}
                        onClick={this.changeBgcolor} > Create Agent </button>
                    <button onClick={this.handleClick}> check </button>
                    <button onClick={this.handleClick}> check3 </button>
                    <input ref={ref => { this.inputRef = ref; }} />
                    <button ref={ref => { this.inputRef = ref; }} >button </button>
        <button onClick={this.onClickfoc.bind(this)}>Click to Focus</button> */}
        // <div onClick={() => this.selectionOnPress("CreateAgent")}>
        //        <div className="subBtn"
        //         style={{backgroundColor:this.state.selectedButton === "CreateAgent"? "white": "#eeeeee"}}>
        //             <div >
        //                 Create Agent 
        //             </div>
        //         </div>
        //     </div>