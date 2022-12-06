import React from 'react'
import { Link } from 'react-router-dom'

const LocationModelHeadlineHomepage = ({article}) => {
    const {slug, garagePhoto, streetName, shortAddress} = article.fields
    return (
        <>
            <Link to={`/location/${slug}`} className='relative' data-aos='fade-up'>
                <div className='hover:scale-105 duration-200'>
                    <img src={'https:' + garagePhoto.fields.file.url} alt={garagePhoto.fields.title}  title={garagePhoto.fields.title} className="w-[300px] h-[175px] rounded-2xl" />
                    <div className='absolute bottom-0 p-5 text-white'>
                        <p className='worksans text-[13px]'>{streetName}</p>
                        <p className='worksans-500'>{shortAddress}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default LocationModelHeadlineHomepage