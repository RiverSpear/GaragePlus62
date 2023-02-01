import React from 'react'
import { Link } from 'react-router-dom'

const LocationModelHeadlineHomepage = ({article}) => {
    const {slug, garagePhoto, streetName, shortAddress} = article.fields
    return (
        <>
            <Link to={`/lokasi/${slug}`} style={{backgroundImage: `url(${'https:' + garagePhoto.fields.file.url})`}} className="relative bg-center bg-cover hover:scale-105 duration-200  w-[300px] h-[175px] rounded-2xl">
                <div className='bg-gradient-to-t to-black/10 from-black h-full rounded-2xl'>
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