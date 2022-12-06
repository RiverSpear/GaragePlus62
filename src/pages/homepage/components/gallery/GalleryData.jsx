import React from 'react'
import GalleryModel from './GalleryModel'

export const GalleryData = ({gallery}) => {
    return (
        <>
            {gallery.map((article, index)=> <GalleryModel article={article} key={index}/>)}
        </>
    )
}

export default GalleryData