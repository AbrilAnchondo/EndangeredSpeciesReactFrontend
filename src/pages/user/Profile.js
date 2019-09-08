import React, { Component } from 'react';
import SpeciesList from '../species/SpeciesList';
import { tsImportEqualsDeclaration } from '@babel/types';
// import MyComments from './MyComments';
// import Commentors from './Commentors';
// import SaveButton from './SaveButton';




export default class Profile extends Component {
    
    state = {
        followedSpecies: []
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

    onUnfollow = (id) => {
      let followedSpecies=this.state.followedSpecies;
      let newFollowedSpecies = followedSpecies.filter(species => species.id !== id);
        this.setState({
          followedSpecies: newFollowedSpecies
      });

    }

    render() {
        return (
            <SpeciesList 
                species={this.state.followedSpecies}
                onUnfollow={this.onUnfollow}/>
        )
    }
}

