import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>
                    Filter by Threat Type:
                    <select value={this.props.searchTerm} onChange={this.props.handleChange}>
                        <option value="All">All</option>
                        <option value="Extinct">Extinct(E)</option>
                        <option value="Extinct in the Wild">Extinct in the wild(EW)</option>
                        <option value="Critically Endangered">Critically Endangered(CE)</option>
                        <option value="Endangered">Endangered(E)</option>
                        <option value="Vulnerable">Vulnerable(V)</option> 
                        <option value="Near Threatened">Near Threatened(NT)</option>
                        <option value="Least Concern">Least Concern(LC)</option>
                        <option value="Data Defficient">Data Defficient(DD)</option>
                        <option value="Not Evaluated">Not Evaluated(NE)</option>
                    </select>
                    </label>
                </form>
                
            </div>
        )
    }
}


