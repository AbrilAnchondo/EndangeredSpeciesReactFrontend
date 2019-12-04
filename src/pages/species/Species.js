import React, { Component } from 'react'
import SaveButton from '../user/SaveButton';
import { Link } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
//MDBBtn


const box = {
  width: "22rem",
  height: "22rem",
  margin: "15px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.5)",
}


export default class Species extends Component {
  
    /*
    userIsFollowing () {
      const followings =  this.props.speciesData.followings;
      for (let i=0; i < followings.length; i++){
        if (followings[i].user_id == localStorage.id) {
            return true;
        } 
      }
      return false;
    }
    */
    
    //gets an array of followingObj for that species
    getUserFollowing () {
        const followings = this.props.speciesData.followings;
        console.log(followings)
        for (let i=0; i < followings.length; i++){
          if (followings[i].user_id == localStorage.id) {
              return followings[i];
          } 
        }
        return null;
      }

      
    render() {
        //const isFollowing = this.userIsFollowing();
        const followingObj = this.getUserFollowing();
        const { common_name, image, id, scientific_name } = this.props.speciesData
        return (
          <MDBCol>
            <MDBCard style={box}>
              <MDBCardImage className="img-fluid" src={image} waves alt={common_name} onClick={this.handleClick} style={{width: "100%"}}/>
                <MDBCardBody>
                  <MDBCardTitle>{common_name}</MDBCardTitle>
                    <MDBCardText style={{fontStyle: "italic"}}>
                      {scientific_name}
                    </MDBCardText>                    
                    <SaveButton
                    isFollowing={followingObj ? true : false} 
                    followingObj={followingObj} 
                    id={id}
                    onFollow={this.props.onFollow}
                    onUnfollow={this.props.onUnfollow}
                    />
                    <Link key={id} to={`/species/${id}`}>
                        <button>View Details</button>
                    </Link>                   
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
            
        )
    }
}

