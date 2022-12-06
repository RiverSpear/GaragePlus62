import React, { Component } from 'react'
import client from '../../client'
import FooterData from './FooterData'

export default class Footer extends Component {
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
                <FooterData aboutus={this.state.articles} />
            </>
        )
    }
}