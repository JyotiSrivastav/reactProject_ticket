import React from 'react';
import {Link ,NavLink} from 'react-router-dom';
import './pageStyle.css'

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInAgent: {
                user: '',
                password: '',
                company: '',
                contact: '',
                email: '',
            },
            whitebg: true ,
            selectedButton: null 
        }
        this.selectionOnPress = this.selectionOnPress.bind(this);
    }
    selectionOnPress(userType) {
        this.setState({ selectedButton: userType });
    }
    // changeBgcolor = (e , id) => {

    //     this.setState({ whitebg: !this.state.whitebg })
    // }
    clearAgentFields=()=>{
          this.setState({
            loggedInAgent: {
                user: '',
                password: '',
                company: '',
                contact: '',
                email: '',
            }, 
            file: '',imagePreviewUrl: '' 
          })
    }
    handleInput = (event, field) => {
        var currentuser = this.state.loggedInAgent;
        currentuser[field] = event.target.value;
        this.setState({ loggedInAgent: currentuser })
    }
    submitHandler = () => {
        var currentAgent = this.state.loggedInAgent;
        var agents = JSON.parse(localStorage.getItem('AgentList'))
        if(agents == null)
        {
            agents =[];
            agents.push(currentAgent);
        }
        else{
            agents.push(currentAgent)  
        }
        //  agents.push(currentAgent)
        localStorage.setItem('AgentList', JSON.stringify(agents))
        this.clearAgentFields()
    }
    _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
   
    render() {
        // let btn_class = this.state.whitebg ? "greenBtn" : "subBtn"
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image </div>);
        }
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
                    <div className="adminBtngroup" style ={{ backgroundColor : this.state.selectedButton === "AddContact" ?"cadetblue" :"white"}}>
                       New Contact
                    </div> 
                </NavLink>
            </div>
            <div onClick={()=> this.selectionOnPress("AddAgents")} >
                <NavLink exact activeClassName="active_class"  to= "/Admin">
                    <div className="adminBtngroup" style ={{ backgroundColor : this.state.selectedButton === "AddAgents" ?"cadetblue" :"white"}}>
                       New Agent
                    </div> 
                </NavLink>
            </div>
          </div>

         <div className="adminDiv">

              <h5 className="pageSubTitle">Create Agent </h5>
              
              <div>
               <div className="imgPreview">
                   {$imagePreview}
                </div>
                <input className="fileInput" 
                 type="file" 
                 onChange={(e)=>this._handleImageChange(e)} />
               </div>

                 <label> Name</label>
                    <input className="form-control" value={this.state.loggedInAgent.user}
                        onChange={(event) => { this.handleInput(event, 'user') }} />
                 <label> Password</label>
                    <input className="form-control" value={this.state.loggedInAgent.password} type="password"
                        onChange={(event) => { this.handleInput(event, 'password') }} />
                 <label> Company </label>
                    <select className="form-control" value={this.state.loggedInAgent.company} 
                        onChange={(event) => { this.handleInput(event, 'company') }} > 
                        <option >MY-XCDIFY </option>
                        <option> OTH-XCDIFY </option>
                    </select>
                 <label> Contact </label>
                    <input className="form-control" value ={this.state.loggedInAgent.contact} type="number"
                        onChange={(event) => { this.handleInput(event, 'contact') }} />
                 <label> Email </label>
                    <input className="form-control" type="email" value={this.state.loggedInAgent.email}
                        onChange={(event) => { this.handleInput(event, 'email') }} />
                 <button className="subBtn" onClick={this.submitHandler} >Create </button>
          </div>

      </div>
      )
    }
}
export default Admin ;




 {/* <button className={btn_class} id="bt1"
                        onClick={this.changeBgcolor}> Create Group </button>
                    <button className={btn_class}
                        onClick={this.changeBgcolor} > Create Agent </button>
                    <button onClick={this.handleClick}> check </button>
                    <button onClick={this.handleClick}> check3 </button>
                    <input ref={ref => { this.inputRef = ref; }} />
                    <button ref={ref => { this.inputRef = ref; }} >button </button>
        <button onClick={this.onClickfoc.bind(this)}>Click to Focus</button> */}
    //     <div onClick={() => this.selectionOnPress("CreateGroup")} >
    //     <div className="subBtn"
    //         style={{backgroundColor:
    //                 this.state.selectedButton === "CreateGroup"   ? "white": "#eeeeee"  }}>
    //         <div>
    //             Create Group
    //         </div>
    //     </div>
    // </div>

//     <div onClick={() => this.selectionOnPress("CreateAgent")}>
//     <div className="subBtn"
//      style={{backgroundColor:this.state.selectedButton === "CreateAgent"? "white": "#eeeeee"}}>
//          <div >
//              Create Agent 
//          </div>
//      </div>
//  </div>
// onClickfoc() {
//     this.inputRef.focus();
//   }

 // handleClick = (e ) => {
    //     console.log("this is working fine");
    //     e.preventDefault();
    //     e.target.style.backgroundColor = 'blue'
    //     console.log(e.target);
    // }