import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginForm from './pages/auth/LoginForm';
import SignupForm from './pages/auth/SignupForm';
import Logout from './pages/auth/Logout';
import SpeciesContainer from './pages/species/SpeciesContainer';
import NavBar from './Components/NavBar';
import Profile from './containers/Profile';
import Organizations from './containers/Organizations';
import About from './Components/About';
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
        path="/species"
        render={(routerProps)=> <SpeciesContainer {...routerProps} username={this.state.username} id={this.state.id}/>}
         />
         
          <Route 
          exact 
          path="/organizations" 
          render={(routerProps)=> <Organizations  {...routerProps}/>}
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
        </div>
     </Switch>

   )
  }


}


export default App

        