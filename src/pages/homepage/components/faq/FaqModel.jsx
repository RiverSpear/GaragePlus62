import React, { useRef } from 'react'

const FaqModel = ({article, active, onToggle}) => {
    const {question, answer} = article.fields
    const contentEl = useRef();
    return (
        <>
            <div className={`flex flex-col gap-3 pb-5 ${active ? "active" : ""}`}>
                <div className="flex justify-between cursor-pointer" onClick={onToggle}>
                    <p className={`worksans-500 text-[15px] pr-10 duration-200 ${active ? "text-amber-500" : ""}`}>{question}</p>
                    <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" className={`duration-200 ${active ? "rotate-90" : ""}`}>
                        <path d="M6 9l6 6 6-6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <p className="answer_wrapper text-slate-500 text-[15px] worksans" ref={contentEl} style={ active ? { height: contentEl.current.scrollHeight } : { height: "0px" }}>{answer}</p>
            </div>
        </>
    )
}

export default FaqModel