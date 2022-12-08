import React, { Component, Suspense } from 'react'
import client from '../../client'
import TestimonyData from './TestimonyData'
import Loading from '../../components/Loading/Loading'

export default class Testimony extends Component {
    state = {
        articles: []
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'testimonial'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 
    render() { 
        return (
            <>
                { !this.state.articles ? <Loading/> : (
                    <Suspense fallback={<Loading/>}>
                        <TestimonyData testimonial={this.state.articles} />
                    </Suspense>
                )}
            </>
        )
    }
}