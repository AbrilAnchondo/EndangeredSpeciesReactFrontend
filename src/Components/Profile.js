import React, { Component } from 'react'

export default class Profile extends Component {

    state = {
        user_species: []
    }

    componentDidMount () {
        if (localStorage.token) {
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
        } else {
            alert("Please Login or Signup to Continue")
            this.props.history.push('/')
        }
    }


    render() {
        return (
            <div>
                <h2>Welcome {this.props.username},</h2>
                <h3>Your collection:</h3>
                {this.state.user_species.map(species => <div key={species.id}>{species.common_name}<img src={species.image} alt=""/></div>)}
            </div>
        )
    }
}
