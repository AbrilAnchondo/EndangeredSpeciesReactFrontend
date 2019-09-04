import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {

 

  return (
    <div style={{ borderBottom: '2px solid black', padding: '20px', marginBottom: '12px' }}>
      <NavLink 
        to="/"
        exact activeStyle={{color: 'blue'}}
        >
        Home
      </NavLink>
      
      <NavLink 
        to="/login"
        exact activeStyle={{color: 'blue'}}
        >
        Login
      </NavLink>

      <NavLink 
        to="/signup"
        exact activeStyle={{color: 'blue'}}
        >
        Signup
      </NavLink>

      <NavLink 
        to="/profile"
        exact activeStyle={{color: 'blue'}}
        style={{float: 'right'}}
        >
        Your Page
      </NavLink>

      <NavLink 
        to="/logout"
        exact activeStyle={{color: 'blue'}}
        >
        Logout
      </NavLink>

      <NavLink 
        to="/species"
        exact activeStyle={{color: 'blue'}}
        style={{float: 'right'}}
        >
        Endangered Species
      </NavLink>
    </div>
  );
}

export default NavBar;