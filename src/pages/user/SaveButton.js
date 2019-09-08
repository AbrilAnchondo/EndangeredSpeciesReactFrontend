import React, { Component } from 'react'

export default class SaveButton extends Component {

    state = {
        isFollowed: false
    }
   

    followSpecies = () => {
        fetch("http://localhost:3000/followings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.token,
                "Accepts": "application/json"
                
            },
            body: JSON.stringify({
                user_id: localStorage.id,
                species_id: this.props.id
            })
        })
        .then(resp => resp.json())
        
    }


    unfollowSpecies = () => {
       let id = this.props.followingObj.id;
       //console.log(this.props.followingObj);
       fetch(`http://localhost:3000/followings/${id}`, {
           method: "DELETE",
           headers: {
               "Authorization": localStorage.token
           }
        })
        .then(resp => resp.json())
        .then(this.props.onUnfollow(this.props.followingObj.species_id))

    }
    

    render() {
        return (
            <div>
                {this.props.isFollowing &&
                <button onClick={this.unfollowSpecies}>Unfollow</button>}

                {!this.props.isFollowing &&
                <button onClick={this.followSpecies}>Follow</button>}
            </div>
        )
    }
}


