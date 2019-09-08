import React from 'react'


export default function SpeciesComments(props) {

    
    return (
        <div>
            <h3>Comments:</h3>
            {props.comments.map(comment => <p key={comment.id}>{comment.user.username} - {comment.content}</p>)}
        </div>
    )
}
