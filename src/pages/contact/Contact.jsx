import React, { Component, Suspense } from 'react'
import client from '../../client'
import Loading from '../../components/Loading/Loading'
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
                { !this.state.articles ? <Loading/> : (
                    <Suspense fallback={<Loading/>}>
                        <ContactData chat={this.state.articles} />
                    </Suspense>
                )}
            </>
        )
    }
}