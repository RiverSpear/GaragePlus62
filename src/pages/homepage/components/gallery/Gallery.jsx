import React, { Component } from 'react'
import client from '../../../../client'
import GalleryData from './GalleryData'

export default class Gallery extends Component {
    state = {
        articles: []
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'gallery'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 
    render() {
        return (
            <>
                <GalleryData gallery={this.state.articles} />
            </>
        )
    }
}