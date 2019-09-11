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
           <div className="bgs" > 
            <MDBContainer  style={{marginTop: "0em", marginLeft: "40%"}} >
                <MDBRow>
                    <MDBCol md="24">
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
            </div>
        )
    }
}


// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

// const FormPage = () => {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <MDBCard>
//             <MDBCardBody>
//               <form>
//                 <p className="h4 text-center py-4">Sign up</p>
//                 <div className="grey-text">
//                   <MDBInput
//                     label="Your name"
//                     icon="user"
//                     group
//                     type="text"
//                     validate
//                     error="wrong"
//                     success="right"
//                   />
//                   <MDBInput
//                     label="Your email"
//                     icon="envelope"
//                     group
//                     type="email"
//                     validate
//                     error="wrong"
//                     success="right"
//                   />
//                   <MDBInput
//                     label="Confirm your email"
//                     icon="exclamation-triangle"
//                     group
//                     type="text"
//                     validate
//                     error="wrong"
//                     success="right"
//                   />
//                   <MDBInput
//                     label="Your password"
//                     icon="lock"
//                     group
//                     type="password"
//                     validate
//                   />
//                 </div>
//                 <div className="text-center py-4 mt-3">
//                   <MDBBtn color="cyan" type="submit">
//                     Register
//                   </MDBBtn>
//                 </div>
//               </form>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default FormPage;