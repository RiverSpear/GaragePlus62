import React, { Component } from 'react'
import client from '../../client'
import ChatData from './ChatData'

export default class Chat extends Component {
    state = {
        articles: []
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'location'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 
    render() {
        return (
            <>
                <ChatData chat={this.state.articles} />
            </>
        )
    }
}