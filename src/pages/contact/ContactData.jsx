import React from 'react'
import ContactModel from './ContactModel'

export const ContactData = ({chat}) => {
    return (
        <>
            <div className='flex flex-wrap justify-center gap-10'>
                {
                    chat.map((article, index)=> <ContactModel article={article} key={index}/>)
                }
            </div>
        </>
    )
}

export default ContactData