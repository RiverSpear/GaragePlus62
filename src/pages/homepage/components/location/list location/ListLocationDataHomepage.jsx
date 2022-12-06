import React from 'react'
import ListLocationModelHomepage from './ListLocationModelHomepage'

export const ListLocationDataHomepage = ({location}) => {
    return (
        <>
            <div className='flex flex-wrap justify-center gap-20 sm:gap-32'>
                {
                    location.map((article, index) => <ListLocationModelHomepage article={article} key={index}/>).sort(function(a,b){return a.type-b.type}).reverse()
                }
            </div>
        </>
    )
}

export default ListLocationDataHomepage