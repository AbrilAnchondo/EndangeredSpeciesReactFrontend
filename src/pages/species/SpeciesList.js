import React, { Component } from 'react';
import Species from './Species';





export default class SpeciesList extends Component {

    render() {
        return (
            <div>
                <h2>Learn About Endangered Species</h2>
                {this.props.species.map(species => 
                    <Species speciesData={species} key={species.id} 
                        onUnfollow={this.props.onUnfollow}/>
                )}
            </div>
        )
    }
}
