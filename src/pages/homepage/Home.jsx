import React, { Component, Suspense } from 'react'
import client from '../../client'
import Loading from '../../components/Loading/Loading'
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
                { !this.state.articles ? <Loading/> : (
                    <Suspense fallback={<Loading/>}>
                        <HomeData home={this.state.articles} />
                    </Suspense>
                )}
            </>
        )
    }
}