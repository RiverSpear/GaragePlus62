import React from 'react'
import PageNotFoundModel from './PageNotFoundModel'

export const PageNotFoundData = ({pageNotFound}) => {

    return (
        <>
            {
                pageNotFound.map((article, index)=> <PageNotFoundModel article={article} key={index} />)
            }
        </>
    )
}

export default PageNotFoundData