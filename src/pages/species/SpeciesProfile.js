import React, { Component } from 'react'
import SpeciesComments from './SpeciesComments';
import AddComment from './AddComment';
import OtherUsers from '../user/OtherUsers';
//import { MDBContainer, MDBRow, MDBCol } from "mdbreact";



export default class SpeciesProfile extends Component {

    state = {
        speciesDetails: null,
        newComment: "",
        comments: []
    }

   componentDidMount () {

       if (localStorage.token) {
            let token = localStorage.token;
            let id = this.props.match.params.id;
            fetch(`http://localhost:3000/species/${id}`, {
                headers: {
                    "Authorization": token
                }
            })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    speciesDetails: data,
                    comments: data.comments
                })
            })
        }
   }

   handleChange = (event) => {
    this.setState({
        newComment: event.target.value
    })
   }

   handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    let id = this.props.match.params.id;
    let token = localStorage.token;
    fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
            "Accepts": "application/json"
        },
        body: JSON.stringify({

                user_id: localStorage.id,
                species_id: id,
                content: this.state.newComment

        })
    }).then(resp => resp.json())
       .then(data => {
                this.setState({
                    comments: [data, ...this.state.comments],
                    newComment: ""
                })
        })
    }


    render() {

        if (this.state.speciesDetails === null) { return <div></div>; }
        const { id, common_name, scientific_name, threat_type, image, population, habitat, conservation_measure, use_trade} = this.state.speciesDetails;

        return (
            <div>
                <div className="pic"><img src={image} alt={common_name}/></div>
                <div className="follows">
                        <OtherUsers id={this.props.match.params.id} />
                </div>
                
                <div className="column-layout">
                    <div className="main-column">
                        <h3 style={{fontWeight: "bold"}}>{common_name}</h3>
                        <p style={{fontStyle: "italic"}}>{scientific_name}</p>
                        <p style={{fontWeight: "bold"}}>Threat Type <br></br></p>
                        <p style={{fontVariantCaps: "all-small-caps", color: "red", fontWeight: "bold"}}>{threat_type}</p>
                        <p style={{fontWeight: "bold"}}>Conservation Measures <br></br></p>
                        <p>{conservation_measure}</p>
                        <p style={{fontWeight: "bold"}}>Use and Trade <br></br></p>
                        <p>{use_trade}</p>
                    </div>
                    <div className="sidebar-one">
                        <p  style={{fontWeight: "bold"}}>Population<br></br></p>
                        <p>{population}</p>
                    </div>
                    <div className="sidebar-two">
                        <p  style={{fontWeight: "bold"}}>Habitat<br></br> </p>
                        <p>{habitat}</p>
                    </div>
                </div>
                <SpeciesComments comments={this.state.comments}/>
                <AddComment
                    newComment={this.state.newComment}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                 
                <div style={{ height: '200px' }}/>

            </div>
            
            )
        }
    }
    
