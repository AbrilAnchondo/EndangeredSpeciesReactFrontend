import React from 'react'

export default function AddComment(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>Add comment: 
                <textarea type="text" name="comment" 
                    value={props.newComment}
                    onChange={props.handleChange}
                    />
            </label>
            <input type="submit" value="Post"/>
        </form>
    )
}
