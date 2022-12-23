import React from 'react'

const LocationModelFooter = ({article}) => {
    const {type, longAddress} = article.fields
    return (
        <>
            <div className='flex flex-col gap-2 worksans text-neutral-600'>
                {
                    type === false ? (
                        <p className='worksans-600'>Pusat</p>
                    ) : (
                        <p className='worksans-600'>Cabang</p>
                    )
                }
                <p className='text-[14px]'>{longAddress}</p>
            </div>
        </>
    )
}

export default LocationModelFooter