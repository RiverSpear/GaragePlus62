import React, { Component } from 'react'
import client from '../../client'
import { HomeData } from './HomeData'

export default class Home extends Component {
    state = {
        articles: []
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'headline'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 
    render() {
        return (
            <>
                <HomeData home={this.state.articles} />
            </>
        )
    }
}