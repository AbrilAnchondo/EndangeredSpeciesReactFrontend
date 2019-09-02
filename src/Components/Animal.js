import React, { Component } from 'react'

export class Animal extends Component {
     state = {
        showDetails: false
     }

     handleClick = () => {
         this.setState({showDetails: !this.state.showDetails})
     }
     
    render() {
        return (
            <div>
                <h3>Common Name: {this.props.animalData.common_name}</h3>
                    <p>Scientific Name: {this.props.animalData.scientific_name}</p>
                    <p>Threat Type: {this.props.animalData.threat_type}</p>
                    <p style={{fontStyle: "italic"}}>click image</p>
                    <img src={this.props.animalData.image} alt={this.props.animalData.common_name}  onClick={this.handleClick}/>
                    {this.state.showDetails &&
                        <div> 
                            <p>Population: {this.props.animalData.population}</p>
                            <p>Habitat: {this.props.animalData.habitat}</p>
                            <p>Conservation Measures: {this.props.animalData.conservation_measure}</p>
                            <p>Use and Trade: {this.props.animalData.use_trade}</p>
                        </div>
                    }   
                    <p>save<br/><span>💟</span></p>   
            </div>
        )
    }
}

export default Animal

