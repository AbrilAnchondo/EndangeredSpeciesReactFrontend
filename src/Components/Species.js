import React, { Component } from 'react';
import Animal from './Animal';

export class Species extends Component {

    state = {
        species: []
    }

    componentDidMount () {
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
                    species: data
                })
            })
        } else {
            alert("Please Login or Signup to continue")
            this.props.history.push('/')
        }
    }


    
    //inside the render I need to map through the species array
    render() {
        return (
            <div>
                <h2>Learn About Endangered Species</h2>
                {this.state.species.map(animal => <Animal animalData={animal} key={animal.id}/>)}
            </div>
        )
    }
}

export default Species
