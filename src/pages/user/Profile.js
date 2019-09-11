import React, { Component } from 'react';
import SpeciesList from '../species/SpeciesList';


const container = {

   margin: "50px 30px 30px 30px",
   padding: "30px"
}

const title ={
    margin: "30px",
    fontFamily: "'Lucida Console' Times serif"
    
}

const add = {
    margin: "30px"
}

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
                    followedSpecies: data.species
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
           <div style={container}>
               <div>
                    <h1 style={title}>Hi {this.props.username},</h1>
                </div>
                <div>
                    <h3 style={add}><a href="/species">Add to your collection...</a></h3>
                </div>
                <div> <SpeciesList 
                    species={this.state.followedSpecies}
                    onUnfollow={this.onUnfollow}/>
                </div>
                <div style={{ height: '200px' }}/>
           </div>
        )
    }
}

