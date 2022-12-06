import React from 'react'
import FooterModel from './FooterModel';

export const FooterData = ({aboutus}) => {
    return (
        <>
            <div className='flex flex-col gap-7'>
                {aboutus.map((article, index) => <FooterModel article={article} key={index}/>)}
            </div>
        </>
    )
}

export default FooterData