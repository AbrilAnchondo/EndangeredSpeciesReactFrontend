import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import LoginForm from './pages/auth/LoginForm';
import SignupForm from './pages/auth/SignupForm';
import Logout from './pages/auth/Logout';
import SpeciesPage from './pages/species/SpeciesPage';
import Profile from './pages/user/Profile';
import Organizations from './pages/Organizations';
import Map from './pages/Map';
import About from './pages/About';
import Footer from './Footer'

import './App.css';
import NavBar from './NavBar';



export class App extends Component {
  
  state = {
    id: 0,
    username: ""
  }

  componentDidMount () {
    if (localStorage.token){
      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(res =>res.json())
      .then((userInfo) => {
        if (!userInfo.errors) {
          this.handleLogin(userInfo)
        }
      })
    }
  }

  
  handleLogin = (userInfo) => {
    this.setState({
      id: userInfo.user_id,
      username: userInfo.username,
    })
    localStorage.id=userInfo.user_id
  }

  render() { 
   return (
     <Switch>
       <div>
        <NavBar />
        <Route 
        exact 
        path="/" 
        render={(routerProps)=> <Home  {...routerProps} username={this.state.username} />}
        />
        <Route
        exact 
        path="/login"
        render={(routerProps)=> <LoginForm {...routerProps} handleLogin={this.handleLogin} />}
         />
        <Route
        exact 
        path="/signup"
        render={(routerProps)=> <SignupForm {...routerProps} username={this.handleLogin} />}
         />
        <Route 
        path="/species"
        render={(routerProps)=> <SpeciesPage {...routerProps} username={this.state.username} id={this.state.id}/>}
         />
        <Route 
        exact 
        path="/logout" 
        render={(routerProps)=> <Logout  {...routerProps} username={this.state.username} />}
        />
        <Route 
        exact 
        path="/about" 
        render={(routerProps)=> <About  {...routerProps} />}
        />
        <Route 
        exact 
        path="/profile" 
        render={(routerProps)=> <Profile  {...routerProps} username={this.state.username} id={this.state.id}/>}
        />
        <Route 
        exact 
        path="/organizations" 
        render={(routerProps)=> <Organizations  {...routerProps} username={this.state.username} id={this.state.id}/>}
        />
        <Route 
        exact 
        path="/map" 
        render={(routerProps)=> <Map  {...routerProps} />}
        />
        <Footer />
        </div>
     </Switch>
     

   )
  }


}


export default App

        