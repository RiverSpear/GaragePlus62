import React, { Component } from 'react'
import client from '../../../../../client'
import ListServiceData from './ListServiceData'

export default class ListService extends Component {
    state = {
        articles: []
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'service'}).then((response) => {
            response.items.sort((a,b) => a.fields.contentOrder < b.fields.contentOrder ? -1 : 1);
            this.setState({articles: response.items})
        })
    } 
    render() {
        return (
            <>
                <ListServiceData service={this.state.articles} />
            </>
        )
    }
}