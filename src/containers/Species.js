import React, { Component } from 'react';
import Animal from '../Components/Animal';



export default class Species extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    <h2>Learn About Endangered Species</h2>
                    {this.props.species.map(animal => <Animal animalData={animal} key={animal.id} handleClick={this.props.saveToPage}/>)}
                </div>
            </div>
        )
    }
}
















    // fetchUserSpecies = () => {
    //     if (localStorage.token) {
    //         let token = localStorage.token
    //         fetch(`http://localhost:3000/users/${this.props.id}`, {
    //             headers: {
    //                 "Authorization": token
    //             }
    //         })
    //         .then(resp => resp.json())
    //         .then(userData => {
    //             this.setState({
    //                 user_species: userData.species
    //             })
    //         })
    //     } 
    // }

