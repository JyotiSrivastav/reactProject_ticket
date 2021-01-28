import React from 'react';
import {Link ,NavLink} from 'react-router-dom';
// import './index.css';
import './App.css';

class Menu extends React.Component {
    render(){
        return (
            <div className="menuStyle">
                <h1> hi menu </h1>
                <Link to="/"> About </Link>
                <Link to='/contact1'> Contact Us</Link>
                <NavLink exact activeClassName="active_class"  to= "/">
               <button> Home</button>
                </NavLink>
                    <NavLink exact activeClassName="active_class" to= "/conatct1">
                    form</NavLink>
            </div>
        )
    }
}

export default Menu