import React, { Component } from 'react';

//Don't know exactly what to do with this component


export default class Activity extends Component {

    state = {
        comments: [],
        userAnimal: []
    }

    componentDidMount () {
        fetch("http://localhost:3000/followings")
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                userAnimal: data
            })
        })
    }

    

    render() {
        console.log(this.state.userAnimal)
        return (
            <div>
             Activity Component
             
             
                
            </div>
        )
    }
}


