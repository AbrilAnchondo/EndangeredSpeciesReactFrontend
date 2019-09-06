import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Home from './Components/Home';
import Logout from './Components/Logout';
import SpeciesContainer from './containers/SpeciesContainer';
import Profile from './containers/Profile';
import Activity from './containers/Activity';
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
          path="/activity" 
          render={(routerProps)=> <Activity  {...routerProps} username={this.state.username} id={this.state.id}/>}
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

        