import React, { useEffect, useState } from 'react'
import ServiceModelHeadline from './ServiceModelHeadline'
import TextTransition, { presets } from "react-text-transition";

export const ServiceDataHeadline = ({service}) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <>
            <div className='flex items-center justify-between w-[250px] worksans'>
                <div>
                    <p className='text-[15px] worksans-500 text-slate-800'>Service type</p>
                    <TextTransition springConfig={presets.wobbly} inline className='text-[13px] text-slate-500'>
                        {
                            service.map((article, index) => 
                                <ServiceModelHeadline article={article} key={index}/>
                            )[
                                index % service.map((article, index) => 
                                    <ServiceModelHeadline article={article} key={index}/>).length
                            ]
                        }
                    </TextTransition>
                </div>
                <svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                    <path d="M10.05 10.607l-7.07 7.07a2 2 0 000 2.83v0a2 2 0 002.828 0l7.07-7.072M17.193 13.8l3.878 3.878a2 2 0 010 2.828v0a2 2 0 01-2.828 0l-6.209-6.208M6.733 5.904L4.61 6.61 2.49 3.075l1.414-1.414L7.44 3.782l-.707 2.122zm0 0l2.83 2.83" stroke="#989898" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M10.05 10.607c-.844-2.153-.679-4.978 1.061-6.718 1.74-1.74 4.95-2.121 6.717-1.06l-3.04 3.04-.283 3.111 3.111-.282 3.04-3.041c1.062 1.768.68 4.978-1.06 6.717-1.74 1.74-4.564 1.905-6.717 1.061" stroke="#989898" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>
        </>
    )
}

export default ServiceDataHeadline