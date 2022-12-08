import React, { Component, Suspense } from 'react'
import client from '../../client'
import LocationData from './LocationData'
import Loading from '../../components/Loading/Loading'

export default class Location extends Component {
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
                { !this.state.articles ? <Loading/> : (
                    <Suspense fallback={<Loading/>}>
                        <LocationData location={this.state.articles} />
                    </Suspense>
                )}
            </>
        )
    }
}