import React, { Component } from 'react';
import Animal from '../species/Animal';
import MyComments from './MyComments';
import Commentors from './Commentors';


export default class Profile extends Component {
    
    state = {
        userSpecies: [],
        myComments: [],
        commentors: []
    }

    componentDidMount () {
        if (localStorage.token){
            fetch(`http://localhost:3000/users/${this.props.id}`, {
                headers: {
                    "Authorization": localStorage.token
                }
            })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    userSpecies: data.species,
                    myComments: data.m,
                    commentors: data.makers
                })
            })
        }else {
            this.props.history.push('/')
            alert("Please login or sign up")
        }
    }

   

    //fetch to delete animal form user's page
    deleteFromPage = (animal) => {
        fetch(`http://localhost:3000/users/${this.props.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": localStorage.token
            },
            body: JSON.stringify(
            )
        })
        .then(resp => resp.json())
        
        let index = this.state.userSpecies.indexOf(animal)
        let copyUserSpecies = [...this.state.userSpecies]
        copyUserSpecies.splice(index, 1)
        this.setState({
            userSpecies: copyUserSpecies
        })   
    }

    renderComments = () => {

    }

    render() {
    
        return (
            <div>
                Nice Collection {this.props.username}!
                {this.state.userSpecies.map((animal, index) => <Animal animalData={animal} commentors={this.state.commentors} comments={this.state.myComments} key={`${animal.common_name}-${index}`} handleClick={() => this.deleteFromPage(animal)}/>)}
                <MyComments comments={this.state.myComments}/>
                <Commentors commentors={this.state.commentors}/>
                
            </div>
        )
    }
}



