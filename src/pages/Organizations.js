import React, { Component } from 'react';


const orgContainer = {
    margin: "30px",
    padding: "30px",   
}

const orgList = {
 border: "solid grey",
 marginTop: "5px",
 marginLeft: "25%",
 padding: "20px",
 width: "50%",
 textAlign: "center",
 fontSize: "1.8em",
 boxShadow: "5px 5px 5px grey"
 
}


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
           <div style={orgContainer} >
               <h1 style={{textAlign: "center", padding: "50px"}}>This is a list of link to some importatn Wildlife Organizations</h1>
                {this.state.organizations.map(organization => <div style={orgList}><a href={organization.url}>{organization.name}</a></div>)}
            </div>   
        )
    }
}






 