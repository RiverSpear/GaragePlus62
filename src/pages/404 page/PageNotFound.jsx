import React, { Component } from 'react'
import client from '../../client'
import PageNotFoundData from './PageNotFoundData'

export default class PageNotFound extends Component {
    state = {
        articles: []
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'aboutUs'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 
    render() {
        return (
            <>
                <PageNotFoundData pageNotFound={this.state.articles} />
            </>
        )
    }
}