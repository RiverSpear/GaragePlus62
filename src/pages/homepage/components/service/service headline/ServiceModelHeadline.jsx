import React from 'react'

const ServiceModelHeadline = ({article}) => {
    const {serviceName} = article.fields
    return (
        <>
            <p>{serviceName}</p>
        </>
    )
}

export default ServiceModelHeadline