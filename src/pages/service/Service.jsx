import React, { Component } from 'react'
import client from '../../client'
import ServiceData from './ServiceData'

export default class Service extends Component {
    state = {
        articles: []
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'service'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 
    render() {
        return (
            <>
                <ServiceData service={this.state.articles} />
            </>
        )
    }
}