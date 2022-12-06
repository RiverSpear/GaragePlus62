import React from 'react'

function MouseAnimation() {
    return (
        <>
            <div className='relative h-10 w-7 border-2 border-slate-400 rounded-full before:w-1 before:h-1 before:absolute before:bg-slate-400 before:rounded-full before:top-2 before:left-1/2 before:-translate-x-1/2 mouse_animation'></div>
        </>
    )
}

export default MouseAnimation