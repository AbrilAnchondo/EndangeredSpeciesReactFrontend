import React, { Component } from 'react'
import SaveButton from '../user/SaveButton';
import { Link } from 'react-router-dom';

export default class Species extends Component {

    userIsFollowing () {
      const followings =  this.props.speciesData.followings;
      for (let i=0; i < followings.length; i++){
        if (followings[i].user_id == localStorage.id) {
            return true;
        } 
      }
      return false;
    }
     


    render() {
        const isFollowing = this.userIsFollowing();
        const {common_name, image, id,} = this.props.speciesData
        return (
            <div>
                <h3>Common Name: {common_name}</h3>
                <img src={image} alt={common_name} onClick={this.handleClick}/>
                <SaveButton isFollowing={isFollowing} id={id}/>
                <Link key={id} to={`/species/${id}`}>
                    <button>View Details</button>
                </Link>
            </div>
        )
    }
}


          