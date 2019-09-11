import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
  padding: '30px',
  marginBottom: '0',
  backgroundImage: "linear-gradient(darkgreen, lightgreen)"
}

const navText = {
  color: "black",
  fontSize:"1.5em",
  padding: "10px"
}

const NavBar = (props) => {

 

  return (
    <div style={navStyle}>
      <NavLink 
        to="/"
        exact activeStyle={{color: 'white'}} style={navText}
        >
        Home
      </NavLink>
      
      <NavLink 
        to="/login"
        exact activeStyle={{color: 'white'}} style={navText}
        >
        Login
      </NavLink>

      <NavLink 
        to="/logout"
        exact activeStyle={{color: 'white'}} style={{color: "black", float: 'right', fontSize:"1.5em", padding: "10px"}}
        
        >
        Logout
      </NavLink>

      <NavLink 
        to="/signup"
        exact activeStyle={{color: 'white'}} style={navText}
        >
        Signup
      </NavLink>

      <NavLink 
        to="/about"
        exact activeStyle={{color: 'white'}} style={navText}
        >
        About
      </NavLink>

      <NavLink 
        to="/profile"
        exact activeStyle={{color: 'white'}} style={{color: "black", float: 'right', fontSize:"1.5em", padding: "10px"}}
     
        >
        My Page
      </NavLink>

      <NavLink 
        to="/species"
        exact activeStyle={{color: 'white'}} style={{color: "black", float: 'right',fontSize:"1.5em", padding: "10px"}}
        
        >
        Endangered Species
      </NavLink>

      
      
    </div>
  );
}

export default NavBar;