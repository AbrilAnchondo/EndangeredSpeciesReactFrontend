import React, { Component } from 'react';
import Species from './Species';


const grid = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "space-around",
}

export default class SpeciesList extends Component {

    render() {
        return (
            <div style={grid}>
                
                {this.props.species.map(species => 
                    <Species speciesData={species} key={species.id}
                        onFollow={this.props.onFollow} 
                        onUnfollow={this.props.onUnfollow}/>
                )}
            </div>
        )
    }
}

