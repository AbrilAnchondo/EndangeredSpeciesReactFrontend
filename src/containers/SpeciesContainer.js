import React, { Component } from 'react';
import Species from './Species';
import Profile from './Profile';


export default class SpeciesContainer extends Component {

    state = {
        species: [],
        user_species: []
    }

    componentDidMount () {
        if (localStorage.token) {
            let token = localStorage.token
            fetch("http://localhost:3000/species", {
                headers: {
                    "Authorization": token
                }
            })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    species: data
                })
            })
        } else {
            this.props.history.push('/')
           
        }
    }

    saveToPage = (animalData) => {
        
    }
    
   

    render() {
        return (
            <div>
                <Species species={this.state.species} username={this.props.username} id={this.props.id} saveToPage={this.saveToPage}/>
                <Profile username={this.props.username} id={this.props.id} />
            </div>
        )
    }
}


