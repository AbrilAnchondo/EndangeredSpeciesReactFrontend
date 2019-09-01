import React, { Component } from 'react'

export default class Profile extends Component {

    state = {
        user_species: []
    }

    componentDidMount () {
        let token = localStorage.token
        fetch(`http://localhost:3000/users/${this.props.id}`, {
            headers: {
                "Authorization": token
            }
        })
        .then(resp => resp.json())
        .then(userData => {
            this.setState({
                user_species: userData.species
            })
        })
    }


    render() {
        return (
            <div>
                Welcome {this.props.username}!
                <ul>
                {this.state.user_species.map(species => <li key={species.id}>{species.common_name}<img src={species.image}/></li>)}
                
                </ul>
            </div>
        )
    }
}
