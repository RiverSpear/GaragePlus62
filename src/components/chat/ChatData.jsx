import React from 'react'
import { useState } from 'react'
import ChatModel from './ChatModel'

export const ChatData = ({chat}) => {
    const [clicked, setClicked] = useState("0")
    const [popup, setPopup] = useState(false)

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };

    return (
        <>
            <span className='fixed bottom-10 right-10 z-10 bg-white p-3 rounded-full shadow-lg hover:shadow-md shadow-gray-300 cursor-pointer duration-200' onClick={() => setPopup(true)}>
                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                    <path d="M8 10h8M8 14h4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className='stroke-amber-500'></path>
                </svg>
            </span>
            <div className={`fixed z-20 inset-0 bg-black/50 duration-200 ${popup ? "h-screen visible pt-20 sm:pt-32 opacity-100" : "h-0 invisible pt-0 opacity-0"}`}>
                <div className='flex flex-col bg-white shadow-lg m-auto rounded-lg w-[300px] sm:w-[450px]'>
                    <div className='flex justify-between items-start border-b border-slate-300 p-5'>
                        <div className='flex flex-col gap-1 w-10/12'>
                            <p className='worksans-500 text-[18px]'>Punya pertanyaan ?</p>
                            <p className='worksans text-gray-500 text-[14px]'>Pilih lokasi bengkel favoritmu dan hubungi tim kami.</p>
                        </div>
                        <span className='bg-slate-50 hover:bg-slate-100 p-1 rounded-md cursor-pointer' onClick={() => setPopup(false)}>
                            <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className='stroke-slate-500'></path>
                            </svg>
                        </span>
                    </div>
                    <div className='flex flex-col gap-5 p-5'>
                        {
                            chat.map((article, index)=> <ChatModel onToggle={() => handleToggle(index)} article={article} key={index} active={clicked === index}/>).sort(function(a,b){return a.type-b.type}).reverse()
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatData