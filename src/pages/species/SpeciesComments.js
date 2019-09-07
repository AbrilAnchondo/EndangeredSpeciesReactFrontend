import React from 'react'
import { isCompletionStatement } from '@babel/types'

export default function SpeciesComments(props) {
    return (
        <div>
            <h3>Comments:</h3>
            {props.comments.map(comment => <p key={comment.id}>{comment.user_id} - {comment.content}</p>)}
        </div>
    )
}
