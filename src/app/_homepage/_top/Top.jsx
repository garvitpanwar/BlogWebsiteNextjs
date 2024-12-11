import Image from 'next/image'
import React from 'react'


export const Top = () => {
    return (
        <div className='-z-10 relative -mt-64'>
            <Image src={'/bg3.jpg'}
                width={2500}
                height={200}
                alt='homepageImg'
                // style={{zIndex:-1, position:'absolute', top:'-10px'}}
                style={{position:'relative'}}
                />
            <div className='absolute bottom-32 right-32 text-[80px] w-1/3 font-bold italic'>Innovation distinguishes between a leader and a follower</div>
        </div>
    )
}
