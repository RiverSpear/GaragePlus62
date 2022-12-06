import React from 'react'

const LocationModelFooter = ({article}) => {
    const {type, streetName, shortAddress} = article.fields
    return (
        <>
            {
                type === false ? 
                    null
                 : (
                    <div className='flex flex-col gap-2 worksans text-neutral-600'>
                        <p className='text-neutral-600'>{streetName}</p>
                        <p className='text-[14px]'>{shortAddress}</p>
                    </div>
                )
            }
        </>
    )
}

export default LocationModelFooter