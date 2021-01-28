import React from 'react'
// import Home from './Home.js'
// import Contact from './Contact.js'
// import About from './About.js';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'


class User extends React.Component{
     constructor(props){
         super(props);
         this.state ={
             allprofile :[],
             currentUser :{
               firstname :'',
               lastname :'',
               email :'' ,
               company :'',
               phone :'',
               compDescription :''     
             }
         }
     }

     handleInput = (event, field) => {
        var user = this.state.currentUser;
        user[field] = event.target.value;
        this.setState({ currentUser: user })
    }



    update = (event) => {
        this.addProfileToLocalStorage();
    }

    getAllProfilesFromLocalStorage = () => {
        var profiles = JSON.parse(localStorage.getItem('allProfiles'));
        if (profiles == null) {
            profiles = [];
            localStorage.setItem('allProfiles', JSON.stringify(profiles))
        }
        this.setState({ allprofile: profiles })
    }

    componentDidMount() {
        this.getAllProfilesFromLocalStorage();
    }

    addProfileToLocalStorage = () => {
        var profile = JSON.parse(localStorage.getItem('allProfiles'));
        profile.push(this.state.currentUser);
        localStorage.setItem('allProfiles', JSON.stringify(profile))
        // this.setState({ allTickets: ticketDetails })
       this.clearForm();
    }
    clearForm =() =>{
        this.setState ({
            currentUser :{
              firstname :'',
              lastname :'',
              email :'' ,
              company :'',
              phone :'',
              compDescription:''     
            }
        })
    }

    
    render(){
        return (
            <div className="userDiv"> 
                
                <h5 className="pageSubTitle">User Profile </h5>
                <div className="userFlexDiv">
                    {/* <div className="listOfUserMenu">Hi jyoti
                      <div><button className="form-control">User Update</button> </div>
                      <div><button className="form-control"> Add Ticket</button> </div>
                      <div><button className="form-control"> Setting</button> </div>
                    </div> */}
                   <div className="userForm">
                <div className="row">
                        <div className="col-6"> 
                            <label>First Name</label>
                            <input className="form-control"
                            value={this.state.currentUser.firstname} onChange={(event) => { this.handleInput(event, 'firstname') }}  />
                        </div>
                        <div className="col-6">
                            <label>Last Name</label>
                            <input className= "form-control " 
                            value={this.state.currentUser.lastname} onChange={(event) => { this.handleInput(event, 'lastname') }} />
                        </div>
                </div>
                <div>
                    <label>Email</label>
                    <input className="form-control" 
                     value={this.state.currentUser.email} onChange={(event) => { this.handleInput(event, 'email') }}/>
                </div>
                <div>
                    <label>Phone</label>
                    <input className="form-control " 
                    value={this.state.currentUser.phone} onChange={(event) => { this.handleInput(event, 'phone') }} />
                </div>
                <div>
                    <label>Company</label>
                    <input className="form-control "
                    value={this.state.currentUser.company} onChange={(event) => { this.handleInput(event, 'company') }} />
                </div>
                <div>
                    <label>Description (Location)</label>
                    <input className="form-control "
                    value={this.state.currentUser.compDescription} onChange={(event) => { this.handleInput(event, 'compDescription') }}/>
                </div>
                <div>
                    <button className=" subBtn  mt-5 mb-3 "
                     onClick ={this.update}>Create</button>
                </div>
                    </div>
                </div>
                {/* <input placeholder="login /userName"/>
                <input placeholder ="Password"/> */}
               {/* <div>
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            {this.props.children}
         </div> */}
         {/* <Router>
  <div>
    <ul>
      <li>Home></li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <hr/>

    // All 3 components below would be rendered when in a homepage
    <Route exact path="/" component={Home}/>
    <Route exact path="/" component={About}/>
    <Route exact path="/" component={Contact}/>

    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
  </div>
</Router> */}
            </div>
        )
    }
}
 
 

export default User ;

// ReactDOM.render((
//     <Router history = {browserHistory}>
//        <Route path = "/" component = {User}>
//           <IndexRoute component = {Home} />
//           <Route path = "home" component = {Home} />
//           <Route path = "about" component = {About} />
//           <Route path = "contact" component = {Contact} />
//        </Route>
//     </Router>
//  ), document.getElementById('User'))