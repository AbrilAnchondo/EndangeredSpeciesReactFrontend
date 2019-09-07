import React, { Component } from 'react'

export default class SignupForm extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/users", {
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
              this.props.username(userInfo)
              this.props.history.push('/species')
              
            }
        })

    }



    render() {
        return (
            <div>
                 <h2>Signup</h2>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={this.state.username} id="username" onChange={this.handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={this.state.password} id="password" onChange={this.handleChange}/>
                <input type="submit" value="Signup"/>
                </form>
            </div>
        )
    }
}
