import React from 'react'

function Loading() {
    return (
            <div>
                <div className='flex flex-col items-center gap-3 pt-56'>
                    <p className='worksans-600 text-[20px]'>Loading</p>
                    <div className='loading bg-amber-500'></div>
                </div>
            </div>
    )
}

export default Loading