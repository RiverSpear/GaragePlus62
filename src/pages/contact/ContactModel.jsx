import React from 'react'

import whatsapp_icon from '../../asset/icon/whatsapp.png'
import instagram_icon from '../../asset/icon/instagram.png'
import tiktok_icon from '../../asset/icon/tik-tok.png'

const ContactModel = ({article}) => {
    const {type, streetName, longAddress, whatsapp, instagram, tikTok} = article.fields
    return (
        <>
            <div className='flex flex-col gap-5 bg-white p-7 shadow-[0_25px_50px_-25px_rgba(148,163,184,0.5)] w-full sm:w-[600px] rounded-lg'>
                <div className='flex flex-col-reverse sm:flex-row items-start justify-between gap-2 sm:gap-0'>
                    <div className='flex flex-col gap-2 w-full sm:w-3/4'>
                        <p className='worksans-500'>GaragePlus62 {streetName}</p>
                        <p className='worksans text-[14px] text-slate-500 leading-6'>{longAddress}</p>
                    </div>
                    {
                        type === true ? (
                            <p className='text-[14px] worksans-600 text-amber-500'>Pusat</p>
                        ) : (
                            <p className='text-[14px] worksans-600 text-amber-500'>Cabang</p>
                        )
                    }
                </div> 
                <div className='flex flex-col gap-7'>
                    <div className='flex items-center gap-5'>
                        <img src={instagram_icon} alt="Instagram icons created by Pixel perfect - Flaticon" title="instagram icons" width={20} longdesc="https://www.flaticon.com/free-icons/instagram" />
                        <a href={'https://www.instagram.com/' + instagram} target='_blank' rel='noreferrer' className='worksans text-slate-500 text-[14px] hover:underline'>{instagram}</a>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={tiktok_icon} alt="Tiktok icons created by Pixel perfect - Flaticon" title="tiktok icons" width={20} longdesc="https://www.flaticon.com/free-icons/tiktok" />
                        <a href={'https://www.tiktok.com/' + tikTok} target='_blank' rel='noreferrer' className='worksans text-slate-500 text-[14px] hover:underline'>{tikTok}</a>
                    </div>
                    <div className='flex items-center gap-5'>
                        <img src={whatsapp_icon} alt="Whatsapp icons created by Pixel perfect - Flaticon" title="whatsapp icons" width={20} longdesc="https://www.flaticon.com/free-icons/whatsapp" />
                        <a href={'https://wa.me/' + whatsapp} target='_blank' rel='noreferrer' className='worksans text-slate-500 text-[14px] hover:underline'>{whatsapp}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactModel