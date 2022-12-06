import React from 'react'
import ListServiceModel from './ListServiceModel'

export const ListServiceData = ({service}) => {
    return (
        <>
            <div className='flex flex-wrap justify-center gap-14'>
                {
                    service.map((article, index) => (
                        <ListServiceModel article={article} key={index}/>
                    ))
                }
            </div>
        </>
    )
}

export default ListServiceData