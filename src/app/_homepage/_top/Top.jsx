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
                />
        </div>
    )
}
