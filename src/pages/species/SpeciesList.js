import React, { Component } from 'react';
import Species from './Species';
import { Link } from 'react-router-dom';




export default class SpeciesList extends Component {

    render() {
        return (
            <div>
                <div>
                    <h2>Learn About Endangered Species</h2>
                    {this.props.species.map(species => 
                    <Link key={species.id} to={`/species/${species.id}`}>
                        <Species speciesData={species} key={species.id} />
                    </Link>)}
                </div>
            </div>
        )
    }
}

