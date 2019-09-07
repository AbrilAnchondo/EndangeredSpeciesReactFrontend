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
            species_id: this.props.speciesID
        })
    })
    .then(resp => resp.json())
    .then(console.log)
    }


    unfollowSpecies = () => {

    }
    

    render() {
        return (
            <div>
                {this.props.isFollowing &&
                <button onClick={this.unfollowSpecies}>Delete</button>}

                {!this.props.isFollowing &&
                <button onClick={this.followSpecies}>Save</button>}
            </div>
        )
    }
}


