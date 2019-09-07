import React, { Component } from 'react';
import SpeciesList from './SpeciesList';
import FilterThreatType from './FilterThreatType';
import FilterByGroup from './FilterByGroup';



export default class SpeciesBrowser extends Component {

    state = {
        species: [],
        filterThreatTerm: "All",
        filterGroupTerm: "All"
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

    handleFilterByThreat = (event) => {
        this.setState({filterThreatTerm: event.target.value})
    }


    handleFilterByGroup = (event) => {
        this.setState({filterGroupTerm: event.target.value})
    }

   whichSpeciesToRender = () => {
    if(this.state.filterThreatTerm === "All"){
        return this.state.species
    } else {
        return this.state.species.filter(species => species.threat_type === this.state.filterThreatTerm)
    }
   }

    // saveToPage = (animalData) => {
    //     let userId = this.props.id
    //     let speciesId = animalData.id
        
    //     fetch("http://localhost:3000/followings", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": localStorage.token,
    //             "Accepts": "application/json"
                
    //         },
    //         body: JSON.stringify({
    //             user_id: userId,
    //             species_id: speciesId
    //         })
    //     })
    //     .then(resp => resp.json())
    //     .then(console.log)
      
         
    // }
    
   

    render() {
        return (
            <div>
                <a href="/organizations">WildLife Organizations</a><br/>
                <a href="/activity">See other users and comments!</a><br/>
                <hr></hr>
                <FilterThreatType
                    filterThreatTerm={this.state.filterThreatTerm}
                    handleChange={this.handleFilterByThreat}
                    handleSubmit={this.handleSubmit}/>
                <FilterByGroup
                    filterGroupTerm={this.state.filterGroupTerm} 
                    handleChange={this.handleFilterByGroup}/>
                <SpeciesList 
                    species={this.whichSpeciesToRender()} 
                    username={this.props.username} 
                    id={this.props.id} 
                    saveToPage={this.saveToPage} 
                    filterThreatTerm={this.state.filterThreatTerm} 
                    filterGroupTerm={this.state.filterGroupTerm}/>
                
            </div>
        )
    }
}


