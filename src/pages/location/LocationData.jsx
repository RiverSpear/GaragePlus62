import React from 'react'
import { useState } from 'react';
import LocationModel from './LocationModel'

export const LocationData = ({location}) => {
    
    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };
    return (
        <>
            <div className='flex flex-col gap-10 justify-center'>
                {
                    location.map((article, index)=> <LocationModel onToggle={() => handleToggle(index)} article={article} key={index} active={clicked === index}/>).sort(function(a,b){return a.type-b.type}).reverse()
                }
            </div>
        </>
    )
}

export default LocationData