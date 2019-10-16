import React, { Component } from 'react';
import { Link } from 'react-router-dom';






export default class Organizations extends Component {

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
           <div className="orgContainer" >
               <Link to="/species"><h4 style={{textAlign: "right"}}>back</h4></Link>
               <h1 style={{textAlign: "center", padding: "50px"}}>This is a list of link to some importatn Wildlife Organizations</h1>
                {this.state.organizations.map(organization => <div className="orgList"><a href={organization.url}>{organization.name}</a></div>)}
                <div style={{ height: '200px' }}/>
            </div>   
        )
    }
}






 