import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
  padding: '30px',
  marginBottom: '12px',
  backgroundImage: "linear-gradient(darkgreen, lightgreen)"
  

}

const NavBar = (props) => {

 

  return (
    <div style={navStyle}>
      <NavLink 
        to="/"
        exact activeStyle={{color: 'white'}} style={{color: "black"}}
        >
        Home
      </NavLink>
      
      <NavLink 
        to="/login"
        exact activeStyle={{color: 'white'}} style={{color: "black"}}
        >
        Login
      </NavLink>

      <NavLink 
        to="/logout"
        exact activeStyle={{color: 'white'}} style={{color: "black", float: 'right'}}
        
        >
        Logout
      </NavLink>

      <NavLink 
        to="/signup"
        exact activeStyle={{color: 'white'}} style={{color: "black"}}
        >
        Signup
      </NavLink>

      <NavLink 
        to="/about"
        exact activeStyle={{color: 'white'}} style={{color: "black"}}
        >
        About
      </NavLink>

      <NavLink 
        to="/profile"
        exact activeStyle={{color: 'white'}} style={{color: "black", float: 'right'}}
     
        >
        My Page
      </NavLink>

      <NavLink 
        to="/species"
        exact activeStyle={{color: 'white'}} style={{color: "black", float: 'right'}}
        
        >
        Endangered Species
      </NavLink>

      
      
    </div>
  );
}

export default NavBar;