import React, { useRef } from 'react'

import whatsapp_icon from '../../asset/icon/whatsapp.png'
import instagram_icon from '../../asset/icon/instagram.png'
import tiktok_icon from '../../asset/icon/tik-tok.png'

const ChatModel = ({article, active, onToggle}) => {
    const {type, streetName, shortAddress, whatsapp, whatsappUrl, instagram, instagramUrl, tikTok, tiktokUrl} = article.fields
    const contentEl = useRef();
    return (
        <>
            <div className={`flex flex-col gap-3 ${active ? "active" : ""}`}>
                <div className='flex flex-col-reverse sm:flex-row items-start justify-between gap-2 sm:gap-0 cursor-pointer' onClick={onToggle}>
                    <div className='flex flex-col gap-1'>
                        <p className='worksans-500'>GaragePlus62 {streetName}</p>
                        <p className='worksans text-[14px] text-gray-500'>{shortAddress}</p>
                    </div>
                    {
                        type === false ? (
                            <p className='text-[11px] worksans-600 bg-amber-100 text-amber-700 px-3 py-1 uppercase rounded-lg'>Pusat</p>
                        ) : (
                            <p className='text-[11px] worksans-600 bg-slate-100 text-gray-700 px-3 py-1 uppercase rounded-lg'>Cabang</p>
                        )
                    }
                </div>
                <div className='answer_wrapper flex flex-col gap-3 whitespace-nowrap' ref={contentEl} style={ active ? { height: contentEl.current.scrollHeight } : { height: "0px" }}>
                    <a href={instagramUrl} target='_blank' rel='noreferrer' className='flex justify-center items-center gap-5 bg-slate-50 hover:bg-slate-100 py-3 rounded-lg'>
                        <img src={instagram_icon} alt="Instagram icons created by Pixel perfect - Flaticon" title="instagram icons" width={20} longdesc="https://www.flaticon.com/free-icons/instagram" />
                        <p className='worksans text-slate-500 text-[14px]'>{instagram}</p>
                    </a>
                    <a href={tiktokUrl} target='_blank' rel='noreferrer' className='flex justify-center items-center gap-5 bg-slate-50 hover:bg-slate-100 py-3 rounded-lg cursor-pointer'>
                        <img src={tiktok_icon} alt="Tiktok icons created by Pixel perfect - Flaticon" title="tiktok icons" width={20} longdesc="https://www.flaticon.com/free-icons/tiktok" />
                        <p className='worksans text-slate-500 text-[14px]'>{tikTok}</p>
                    </a>
                    <a href={whatsappUrl} target='_blank' rel='noreferrer' className='flex justify-center items-center gap-5 bg-slate-50 hover:bg-slate-100 py-3 rounded-lg'>
                        <img src={whatsapp_icon} alt="Whatsapp icons created by Pixel perfect - Flaticon" title="whatsapp icons" width={20} longdesc="https://www.flaticon.com/free-icons/whatsapp" />
                        <p className='worksans text-slate-500 text-[14px]'>{whatsapp}</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ChatModel