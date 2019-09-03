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
                        <option value="extinct">Extinct(E)</option>
                        <option value="extinct_wild">Extinct in the wild(EW)</option>
                        <option value="critically_endangered">Critically Endangered(CE)</option>
                        <option value="endangered">Endangered(E)</option>
                        <option value="vulnerable">Vulnerable(V)</option> 
                        <option value="near_threatened">Near Threatened(NT)</option>
                        <option value="least_concern">Least Concern(LC)</option>
                        <option value="data_defficient">Data Defficient(DD)</option>
                        <option value="not_evaluated">Not Evaluated(NE)</option>
                    </select>
                    </label>
                </form>
                
            </div>
        )
    }
}


