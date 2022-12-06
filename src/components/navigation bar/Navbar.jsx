import React, { Component } from 'react'
import client from '../../client'
import NavbarData from './NavbarData'

export default class Navbar extends Component {
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
                <NavbarData about={this.state.articles} />
            </>
        )
    }
}