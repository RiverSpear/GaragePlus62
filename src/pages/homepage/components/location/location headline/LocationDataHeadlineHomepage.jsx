import React from 'react'
import LocationModelHeadlineHomepage from './LocationModelHeadlineHomepage'

export const LocationDataHeadlineHomepage = ({location}) => {
    return (
        <>
            <div className='flex flex-wrap items-center justify-center gap-7'>
                {location.map((article, index) => <LocationModelHeadlineHomepage article={article} key={index}/>)}
            </div>
        </>
    )
}

export default LocationDataHeadlineHomepage