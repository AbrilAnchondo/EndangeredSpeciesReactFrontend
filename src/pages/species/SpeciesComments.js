import React from 'react';

const allComments = {
    textAlign: "center"
}


export default function SpeciesComments(props) {

    
    return (
        <div style={allComments}>
            <h3>Comments:</h3>
            {props.comments.map(comment => <p key={comment.id}>{comment.user.username} - {comment.content}</p>)}
        </div>
    )
}
