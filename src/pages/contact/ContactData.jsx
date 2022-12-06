import React from 'react'
import ContactModel from './ContactModel'

export const ContactData = ({chat}) => {
    return (
        <>
            <div className='flex flex-col gap-10'>
                {
                    chat.map((article, index)=> <ContactModel article={article} key={index}/>).sort(function(a,b){return a.type-b.type}).reverse()
                }
            </div>
        </>
    )
}

export default ContactData