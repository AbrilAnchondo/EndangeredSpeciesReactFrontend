import React, { Component } from 'react'

export class LoginForm extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        localStorage.username=this.state.username
    }
    

    // sending info username/password to backend
    handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/tokens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(userInfo => {
            if (!userInfo.errors) {
              localStorage.token = userInfo.token
              this.props.handleLogin(userInfo)
              this.props.history.push('/profile')
              
            }
        })

    }

    render() {
        return (
            <div>
                <h2>Log In</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={this.state.username} id="username" onChange={this.handleChange}/><br />
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" value={this.state.password} id="password" onChange={this.handleChange}/><br />
                    <input type="submit" value="Login" />
                </form>
                
            </div>
        )
    }
}

export default LoginForm

