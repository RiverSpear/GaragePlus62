import React, { Component, Suspense } from 'react'
import client from '../../client'
import FaqData from './FaqData'
import Loading from '../../components/Loading/Loading'

export default class Faq extends Component {
    state = {
        articles: []
    }
    
    componentDidMount() {
        client.getEntries({content_type: 'faq'}).then((response) => {
            this.setState({articles: response.items})
        })
    } 
    render() {
        return (
            <>
                { !this.state.articles ? <Loading/> : (
                    <Suspense fallback={<Loading/>}>
                        <FaqData faq={this.state.articles} />
                    </Suspense>
                )}
            </>
        )
    }
}