import React from 'react';
import { MDBInput } from "mdbreact";

const comment = {
   textAlignt: "center",
   
    margin: "20px",
    padding: "20px"
}


export default function AddComment(props) {
    return (
        <div style={comment}>
            <form onSubmit={props.handleSubmit}>
            
                <MDBInput type="textarea"
                    value={props.newComment} 
                    name="comment"  
                    onChange={props.handleChange} 
                    label="Leave a Comment" outline />
            
                <input type="submit" value="Post"/>
            </form>
        </div>
    )
}

