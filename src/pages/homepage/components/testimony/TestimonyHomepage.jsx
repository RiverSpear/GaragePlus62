import React, { Component } from 'react'
import client from '../../../../client'
import TestimonyDataHomepage from './TestimonyDataHomepage'

export default class ListLocationHomepage extends Component {
    state = {
        articles: []
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'testimonial'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 
    render() {
        return (
            <>
                <TestimonyDataHomepage testimonial={this.state.articles} />
            </>
        )
    }
}