import React, { Component, Suspense } from 'react'
import client from '../../client'
import ServiceData from './ServiceData'
import Loading from '../../components/Loading/Loading'

export default class Service extends Component {
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
                { !this.state.articles ? <Loading/> : (
                    <Suspense fallback={<Loading/>}>
                        <ServiceData service={this.state.articles} />
                    </Suspense>
                )}
            </>
        )
    }
}