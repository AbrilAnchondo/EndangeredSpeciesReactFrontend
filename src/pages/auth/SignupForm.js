import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

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
            
            <MDBContainer style={{marginTop: "10em", marginLeft: "30%"}} >
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <form onSubmit={this.handleSubmit}>
                                <p className="h4 text-center py-4">Signup</p>
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
                                        label="Your password"
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
                                    Sign Up
                                </MDBBtn>
                                </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            
        )
    }
}


