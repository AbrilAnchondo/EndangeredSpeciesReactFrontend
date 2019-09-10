import React, { Component } from 'react'

export class Organizations extends Component {

    state = {
        organizations: []
    }

    componentDidMount () {
        fetch("http://localhost:3000/organizations") 
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                organizations: data
            })
        })

    }


    render() {
        return (
            <div>
                {this.state.organizations.map(organization => <div>{organization.name} -  {organization.url}</div>)}
            </div>
        )
    }
}

export default Organizations
