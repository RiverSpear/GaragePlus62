import React, { Component } from 'react'
import client from '../../../../client'
import LocationDataFooter from './LocationDataFooter'

export default class LocationFooter extends Component {
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
                <LocationDataFooter location={this.state.articles} />
            </>
        )
    }
}