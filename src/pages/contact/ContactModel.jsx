import React from 'react'

import whatsapp_icon from '../../asset/icon/whatsapp.png'
import instagram_icon from '../../asset/icon/instagram.png'
import tiktok_icon from '../../asset/icon/tik-tok.png'

const ContactModel = ({article}) => {
    const {type, streetName, longAddress, whatsapp, whatsappUrl, instagram, instagramUrl, tikTok, tiktokUrl} = article.fields
    return (
        <>
            <div className='flex flex-col gap-5 bg-white p-7 shadow-[0_25px_50px_-25px_rgba(148,163,184,0.5)] w-[275px] sm:w-[650px] rounded-lg'>
                <div className='flex flex-col-reverse sm:flex-row items-start justify-between gap-2 sm:gap-0'>
                    <div className='flex flex-col gap-2 w-full sm:w-3/4'>
                        <p className='worksans-500'>GaragePlus62 {streetName}</p>
                        <p className='worksans text-[14px] text-slate-500 leading-6'>{longAddress}</p>
                    </div>
                    {
                        type === false ? (
                            <p className='text-[11px] worksans-600 bg-amber-100 text-amber-700 px-3 py-1 uppercase rounded-lg'>Pusat</p>
                        ) : (
                            <p className='text-[11px] worksans-600 bg-slate-100 text-slate-700 px-3 py-1 uppercase rounded-lg'>Cabang</p>
                        )
                    }
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 whitespace-nowrap w-full'>
                    <a href={instagramUrl} target='_blank' rel='noreferrer' className='flex justify-center items-center gap-5 hover:bg-slate-100 py-3 rounded-lg w-full'>
                        <img src={instagram_icon} alt="Instagram icons created by Pixel perfect - Flaticon" title="instagram icons" width={20} longdesc="https://www.flaticon.com/free-icons/instagram" />
                        <p className='worksans text-slate-500 text-[14px]'>{instagram}</p>
                    </a>
                    <a href={tiktokUrl} target='_blank' rel='noreferrer' className='flex justify-center items-center gap-5 hover:bg-slate-100 py-3 rounded-lg cursor-pointer w-full'>
                        <img src={tiktok_icon} alt="Tiktok icons created by Pixel perfect - Flaticon" title="tiktok icons" width={20} longdesc="https://www.flaticon.com/free-icons/tiktok" />
                        <p className='worksans text-slate-500 text-[14px]'>{tikTok}</p>
                    </a>
                    <a href={whatsappUrl} target='_blank' rel='noreferrer' className='flex justify-center items-center gap-5 hover:bg-slate-100 py-3 rounded-lg w-full'>
                        <img src={whatsapp_icon} alt="Whatsapp icons created by Pixel perfect - Flaticon" title="whatsapp icons" width={20} longdesc="https://www.flaticon.com/free-icons/whatsapp" />
                        <p className='worksans text-slate-500 text-[14px]'>{whatsapp}</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ContactModel