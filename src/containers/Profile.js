import React, { Component } from 'react';
import Animal from '../Components/Animal';


export default class Profile extends Component {
    
    state = {
        userSpecies: []
    }

    componentDidMount () {
        if (localStorage.token){
            fetch(`http://localhost:3000/users/${this.props.id}`, {
                headers: {
                    "Authorization": localStorage.token
                }
            })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    userSpecies: data.species
                })
            })
        }else {
            this.props.history.push('/')
            alert("Please login or sign up")
        }
    }

    render() {
        console.log(this.state.userSpecies)
        return (
            <div>
                Nice Collection {this.props.username}!
                {this.state.userSpecies.map(animal => <Animal animalData={animal} key={animal.common_name} handleClick={this.props.saveToPage}/>)}
                
            </div>
        )
    }
}



