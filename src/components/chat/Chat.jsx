import React, { Component } from 'react'
import client from '../../client'
import ChatData from './ChatData'

export default class Chat extends Component {
    state = {
        articles: []
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'location'}).then((response) => {
            response.items.sort((a,b) => a.fields.type > b.fields.type ? -1 : 1);
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