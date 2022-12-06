import React from 'react'
import AboutModelHomepage from './AboutModelHomepage'

export const AboutDataHomepage = ({about}) => {
    return (
        <>
            <div className='flex flex-col gap-3 w-full'>
                {about.slice(0,5).map((article, index) => <AboutModelHomepage article={article} key={index}/>)}
            </div>
        </>
    )
}

export default AboutDataHomepage