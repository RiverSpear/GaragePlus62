import React from 'react'
import LocationModelFooter from './LocationModelFooter'

export const LocationDataFooter = ({location}) => {
    return (
        <>
            <div className='flex flex-col gap-5'>
                {location.map((article, index)=> <LocationModelFooter article={article} key={index}/>)}
            </div>
        </>
    )
}

export default LocationDataFooter