import React, { Component } from 'react';
import SpeciesList from './SpeciesList';
import FilterThreatType from './FilterThreatType';
import FilterByGroup from './FilterByGroup';
import Organizations from '../Organizations';
import { Link } from 'react-router-dom';
import Title from './Title';



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


   onButtonClick = () => {
       this.fetchAll();
   }
    
    render() {
        return (
            <div>
                <Title />
                <FilterThreatType
                    filterThreatTerm={this.state.filterThreatTerm}
                    handleChange={this.handleFilterByThreat}
                    handleSubmit={this.handleSubmit}/>
                <FilterByGroup
                    filterGroupTerm={this.state.filterGroupTerm} 
                    handleChange={this.handleFilterByGroup}/>
                <p  style={{textAlign: "center", fontWeight: "bold"}}><Link to="/organizations">Wildlife Organizations</Link></p>
                <p  style={{textAlign: "center", fontWeight: "bold"}}><Link to="/map">Some amazing Animal Sancutaries...</Link></p>
                <SpeciesList
                    species={this.getFilteredSpecies()} 
                    username={this.props.username} 
                    id={this.props.id} 
                    saveToPage={this.saveToPage} 
                    filterThreatTerm={this.state.filterThreatTerm} 
                    filterGroupTerm={this.state.filterGroupTerm}
                    onFollow={this.onButtonClick}
                    onUnfollow={this.onButtonClick}/>
                <div style={{ height: '200px' }}/>

            </div>
        )
    }
}


//<a href="/activity">See other users and comments!</a><br/>
