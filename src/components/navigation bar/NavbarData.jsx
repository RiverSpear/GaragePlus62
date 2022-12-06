import React from 'react'
import NavbarModel from './NavbarModel'

export const NavbarData = ({about}) => {

    return (
        <>
            {
                about.map((article, index)=> <NavbarModel article={article} key={index} />)
            }
        </>
    )
}

export default NavbarData