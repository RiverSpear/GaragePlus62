import React, { Component } from 'react'
import client from '../../../../client'
import FaqData from './FaqData'

export default class Faq extends Component {
    state = {
        articles: []
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'faq'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 
    render() {
        return (
            <>
                <FaqData faq={this.state.articles} />
            </>
        )
    }
}