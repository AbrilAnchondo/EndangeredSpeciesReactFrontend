import React, { Component } from 'react';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Profile from './Components/Profile';
import Home from './Components/Home';
import './App.css';




export class App extends Component {
  
  state = {
    id: 0,
    username: "",
    page: "Login"
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
      page: "Profile"
    })
  }

  handleSignup = (userInfo) => {}

  whichToRender = () => {
    switch(this.state.page){
      case "Login":
        return <LoginForm handleLogin={this.handleLogin} />
      case "Profile": 
        return <Profile username={this.state.username} id={this.state.id}/>
      case "Signup":
        return <SignupForm username={this.handleLogin}/>
      default:
        return <Home />
    }
  }


  render() {
    console.log(this.state, "APP")
    return (
      <div className="App">
        <h1>Endangered Species App</h1>
         {this.whichToRender()}
      </div>
    )
  }
}

export default App
