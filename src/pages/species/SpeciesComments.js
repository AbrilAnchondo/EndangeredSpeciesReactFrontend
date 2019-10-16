import React from 'react';


const allComments = {
    textAlign: "center"
}


export default function SpeciesComments(props) {

    
    return (
        <div style={allComments}>
            <h3 className="comments">Comments:</h3>
            {props.comments.map(comment => <p className="comments" key={comment.id}>{comment.user.username} - {comment.content} </p>)}
            
        </div>
    )
}
