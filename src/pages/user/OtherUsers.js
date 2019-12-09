import React, { Component } from 'react';

export default class OtherUsers extends Component {

    state = { 
        speciesFollowings: []
    }

    componentDidMount () {
        fetch(`http://localhost:3000/species/${this.props.id}`, {
            headers: {
                "Authorization": localStorage.token
            }
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                speciesFollowings: data.followings
            })
        })
    }


    renderFollowers = () => {
        this.state.speciesFollowings.map(following => <div><p>{following.user.username}</p></div>)
    }

    render() {
        return (
            <div className="users-container">
                <h4 className="users">Other users are also interested in this species!</h4>
                {this.state.speciesFollowings.map(following => 
                <p className="users">{following.user.username}</p>)}
            </div>
        )
    }
}


