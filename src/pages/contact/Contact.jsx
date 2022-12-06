import React, { Component } from 'react'
import client from '../../client'
import ContactData from './ContactData'

export default class Contact extends Component {
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
                <ContactData chat={this.state.articles} />
            </>
        )
    }
}