import React, { Component } from 'react'
import client from '../../../../client'
import LocationDataFooter from './LocationDataFooter'

export default class LocationFooter extends Component {
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
                <LocationDataFooter location={this.state.articles} />
            </>
        )
    }
}