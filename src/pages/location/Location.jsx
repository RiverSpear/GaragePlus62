import React, { Component } from 'react'
import client from '../../client'
import LocationData from './LocationData'

export default class Location extends Component {
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
                <LocationData location={this.state.articles} />
            </>
        )
    }
}