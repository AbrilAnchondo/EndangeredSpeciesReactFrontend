import React from 'react'

export default function MyComments(props) {
   
    return (
        <div>
            <h3>Comments:</h3>
            <p>click to see you left this comment</p>
            <ul>
            {props.comments.map(comment => <li>{comment.content}</li>)}
              
            </ul>
        </div>
    )
}
