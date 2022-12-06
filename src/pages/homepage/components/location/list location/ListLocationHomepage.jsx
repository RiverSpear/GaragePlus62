import React, { Component } from 'react'
import client from '../../../../../client'
import ListLocationDataHomepage from './ListLocationDataHomepage'

export default class ListLocationHomepage extends Component {
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
                <ListLocationDataHomepage location={this.state.articles} />
            </>
        )
    }
}