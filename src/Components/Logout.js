import React from 'react'

export default function Logout(props) {
    
   const clearUser = () => {
        localStorage.clear()
        props.history.push('/')
    }
    
    return (
        <div>

            <h2>Thanks for Visiting {props.username}!</h2>
            {clearUser()}
        </div>
    )
}
