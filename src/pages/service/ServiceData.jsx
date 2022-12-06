import React from 'react'
import ServiceModel from './ServiceModel'

export const ServiceData = ({service}) => {
    return (
        <>
            <div className='flex flex-wrap justify-center gap-14'>
                {service.map((article, index)=> <ServiceModel article={article} key={index} />)}
            </div>
        </>
    )
}

export default ServiceData