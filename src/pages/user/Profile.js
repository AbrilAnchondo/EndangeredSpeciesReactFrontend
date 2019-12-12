import React, { Component } from 'react';
import SpeciesList from '../species/SpeciesList';
import  {Link} from 'react-router-dom'



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
        let name = this.props.username;
        let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        
        return (
           <div style={container} className="bg-species">
               <div>
                    <h1 style={title}>Hi {capitalizedName},</h1>
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

