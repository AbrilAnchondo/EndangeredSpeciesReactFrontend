import React, { Component } from 'react'
import SpeciesComments from './SpeciesComments';
import AddComment from './AddComment';
import SaveButton from '../user/SaveButton';

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
        const {id, common_name, scientific_name, threat_type, image, population, habitat, conservation_measure, use_trade} = this.state.speciesDetails;

        return (
            <div>
                <h3>Common Name: {common_name}</h3>
                    <p>Scientific Name: {scientific_name}</p>
                    <p>Threat Type: {threat_type}</p>
                    <img src={image} alt={common_name} />
                    <p>Population: {population}</p>
                    <p>Habitat: {habitat}</p>
                    <p>Conservation Measures: {conservation_measure}</p>
                    <p>Use and Trade: {use_trade}</p>
                    <SpeciesComments comments={this.state.comments}/>
                    <AddComment
                        newComment={this.state.newComment}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                         />
            </div>
        )
    }
}

//<SaveButton speciesID={id}/>

