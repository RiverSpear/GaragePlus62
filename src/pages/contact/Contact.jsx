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
            response.items.sort((a,b) => a.fields.type > b.fields.type ? -1 : 1);
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