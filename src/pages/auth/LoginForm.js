import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

export default class LoginForm extends Component {

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
              this.props.history.push('/species')
              
            }
        })

    }

    render() {
        return (
            <div className="bgl">
            <MDBContainer style={{marginTop: "0", marginLeft: "40%"}}>
                <MDBRow>
                    <MDBCol md="24">
                        <MDBCard>
                            <MDBCardBody>
            
                                <form onSubmit={this.handleSubmit}>
                                <p className="h4 text-center py-4">Log In</p>
                                <div className="grey-text">
                                    <MDBInput
                                    label="Username"
                                    icon="user"
                                    group
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    
                                    />
                                    <MDBInput
                                    label="Password"
                                    icon="lock"
                                    group
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    
                                    />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                    <MDBBtn color="green" type="submit">
                                    Log In
                                </MDBBtn>
                                </div>
                                    </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer> 
            </div>
        )
    }
}




                  
             
              
        // <label htmlFor="username">Username</label>
        // <input type="text" name="username" value={this.state.username} id="username" onChange={this.handleChange}/><br />
        // <label htmlFor="password">Password</label>
        // <input type="text" name="password" value={this.state.password} id="password" onChange={this.handleChange}/><br />
        // <input type="submit" value="Login" />
    