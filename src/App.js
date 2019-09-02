import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Species from './Components/Species';
import './App.css';




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
        exact 
        path="/profile"
        render={(routerProps)=> <Profile {...routerProps} username={this.state.username} id={this.state.id} />}
         />
        <Route
        exact 
        path="/species"
        render={(routerProps)=> <Species {...routerProps} username={this.state.username} id={this.state.id} />}
         />
       </div>
     </Switch>
   )
  }


}


export default App

