import React, { Component } from 'react';
import MyComments from './MyComments';
import Commentors from './Commentors';
import SaveButton from './SaveButton';
import SpeciesList from '../species/SpeciesList';




export default class Profile extends Component {
    
    state = {
        followedSpecies: [],
       
    }

    componentDidMount () {
        if (localStorage.token){
            fetch(`http://localhost:3000/users/${localStorage.id}`, {
                headers: {
                    "Authorization": localStorage.token
                }
            })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    followedSpecies: data.species,
                   
                })
            })
        }else {
            this.props.history.push('/')
            alert("Please login or sign up")
         }
    }

   

    
    // deleteFromPage = (animal) => {
    //     fetch(`http://localhost:3000/users/${this.props.id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Authorization": localStorage.token
    //         },
    //         body: JSON.stringify(
    //         )
    //     })
    //     .then(resp => resp.json())
        
    //     let index = this.state.userSpecies.indexOf(animal)
    //     let copyUserSpecies = [...this.state.userSpecies]
    //     copyUserSpecies.splice(index, 1)
    //     this.setState({
    //         userSpecies: copyUserSpecies
    //     })   
    // }

   

    render() {
      console.log(this.state.followedSpecies)
        return (
            <SpeciesList species={this.state.followedSpecies}/>
        )
    }
}

