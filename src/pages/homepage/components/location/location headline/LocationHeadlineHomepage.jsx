import React, { Component } from 'react'
import client from '../../../../../client'
import LocationDataHeadlineHomepage from './LocationDataHeadlineHomepage'

export default class LocationHeadlineHomepage extends Component {
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
                <LocationDataHeadlineHomepage location={this.state.articles} />
            </>
        )
    }
}