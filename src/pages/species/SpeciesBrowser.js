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

    fetchAll () {
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
                    species: data,
                    filteredSpecies: data
                })
            })
        } else {
            this.props.history.push('/')
            alert("Please login or sign up")
        }
    }

    componentDidMount () {
        this.fetchAll();
    }

    handleFilterByThreat = (event) => {
        this.setState({filterThreatTerm: event.target.value});
    }

    handleFilterByGroup = (event) => {
        this.setState({filterGroupTerm: event.target.value});
    }

    getFilteredSpecies () {
        
        let filtered = this.state.species;

        // filter by threat
        let threat = this.state.filterThreatTerm;
        filtered = filtered.filter(species => 
            (threat === 'All') ? true : (species.threat_type === threat));

        // then filter by group
        let group = this.state.filterGroupTerm;
        filtered = filtered.filter(species => 
            (group === 'All') ? true : (species.group === group));

        return filtered;
    }

    /*
   whichSpeciesToRender = () => {
    let copiedSpecies = [...this.state.species];
    if(this.state.filterThreatTerm === "All"){
        return this.state.species
    } else {
        return this.state.species.filter(species => species.threat_type === this.state.filterThreatTerm)
    }

    if(this.state.filterGroupTerm === "All"){
        return this.state.species
    } else {
        return this.state.species.filter(species => species.group === this.state.filterGroupTerm)
    }
    */
    
   

   onButtonClick = () => {
       this.fetchAll();
   }
    
   

    render() {
        return (
            <div>
                <a href="/organizations">WildLife Organizations</a><br/>
                <hr></hr>
                <FilterThreatType
                    filterThreatTerm={this.state.filterThreatTerm}
                    handleChange={this.handleFilterByThreat}
                    handleSubmit={this.handleSubmit}/>
                <FilterByGroup
                    filterGroupTerm={this.state.filterGroupTerm} 
                    handleChange={this.handleFilterByGroup}/>
                <SpeciesList
                    species={this.getFilteredSpecies()} 
                    username={this.props.username} 
                    id={this.props.id} 
                    saveToPage={this.saveToPage} 
                    filterThreatTerm={this.state.filterThreatTerm} 
                    filterGroupTerm={this.state.filterGroupTerm}
                    onFollow={this.onButtonClick}
                    onUnfollow={this.onButtonClick}/>
                
            </div>
        )
    }
}


//<a href="/activity">See other users and comments!</a><br/>
