import React, { Component } from 'react';
import Species from './Species';
import Search from './Search';
import SearchGroup from './SearchGroup';



export default class SpeciesContainer extends Component {

    state = {
        species: [],
        searchTerm: "All",
        searchGroupTerm: "All"
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
            alert("Please login or sign up")
        }
    }

    handleChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }


    searchGroupTerm = (event) => {
        this.setState({searchGroupTerm: event.target.value})
    }

   whichSpeciesToRender = () => {
    if(this.state.searchTerm === "All"){
        return this.state.species
    } else {
        return this.state.species.filter(species => species.threat_type === this.state.searchTerm)
    }
   }

    saveToPage = (animalData) => {
        let userId = this.props.id
        let speciesId = animalData.id
        
        fetch("http://localhost:3000/followings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.token,
                "Accepts": "application/json"
                
            },
            body: JSON.stringify({
                user_id: userId,
                species_id: speciesId
            })
        })
        .then(resp => resp.json())
        .then(console.log)
      
         
    }
    
   

    render() {
        return (
            <div>
                <a href="/organizations">WildLife Organizations</a><br/>
                <a href="/activity">See other users and comments!</a><br/>
                <hr></hr>
                <Search searchTerm={this.state.searchTerm}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />
                <SearchGroup searchGroupTerm={this.state.searchGroupTerm} handleChange={this.searchGroupTerm}/>
                <Species species={this.whichSpeciesToRender()} username={this.props.username} id={this.props.id} saveToPage={this.saveToPage} searchTerm={this.state.searchTerm}/>
                
            </div>
        )
    }
}


