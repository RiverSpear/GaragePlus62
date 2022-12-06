import React from 'react'
import { HomeModel } from './HomeModel'

export const HomeData = ({home}) => {
    return (
        <div>
            {home.map((article, index)=> <HomeModel article={article} key={index}/>)}
        </div>
    )
}