import React, { Component } from 'react'
import client from '../../../../../client'
import ServiceDataHeadline from './ServiceDataHeadline'

export default class ServiceHeadline extends Component {
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
                <ServiceDataHeadline service={this.state.articles} />
            </>
        )
    }
}