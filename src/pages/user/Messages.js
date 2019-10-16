import React, { Component } from 'react';

export default class Messages extends Component {

    state = {
        m: [],
        makers: []
    }

    componentDidMount () {
        let id = localStorage.id;
        let token = localStorage.token;
        fetch(`http://localhost:3000/users/${id}`, {
            headers: {
                "Authorization": token
            }
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                m: data.m,
                makers: data.makers
            })
        })

    }
    


    render() {
        //console.log(this.props.id)
        return (
            <div>
                <h1>Your Messages</h1>
                {this.state.m.map(message => <h4 key={message.id}>{message.content} - {message.maker_id}</h4>)}
                
            </div>
        )
    }
}


