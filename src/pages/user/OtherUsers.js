import React, { Component } from 'react';

export default class OtherUsers extends Component {

    state = { 
        speciesFollowings: []
    }

    componentDidMount () {
        fetch('http://localhost:3000/species', {
            headers: {
                "Authorization": localStorage.token
            }
        })
        .then(resp => resp.json())
        //.then(console.log)
        .then(data => {
            this.setState({
                speciesFollowings: data.followings
            })
        })
    }


    // renderFollowers = () => {
    //     this.state.speciesFollowings.map(following => <div><h3>{followings.species_id}</h3>
    //     <p>{following.user.username}</p>
    //     </div>)
    // }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}


