import React, { Component } from 'react'
import client from '../../../../client'
import AboutDataHomepage from './AboutDataHomepage'

export default class AboutHomepage extends Component {
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
                <AboutDataHomepage about={this.state.articles} />
            </>
        )
    }
}