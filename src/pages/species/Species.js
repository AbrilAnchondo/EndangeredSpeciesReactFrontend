import React, { Component } from 'react'
import SaveButton from '../user/SaveButton'

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
        return (
            <div>
                <h3>Common Name: {this.props.speciesData.common_name}</h3>
                <img src={this.props.speciesData.image} alt={this.props.speciesData.common_name} onClick={this.handleClick}/>
                <SaveButton isFollowing={isFollowing}/>
            </div>
        )
    }
}


          