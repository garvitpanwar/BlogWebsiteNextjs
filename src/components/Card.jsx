import Image from 'next/image';
import React from 'react';

export const Card = ({ imageSrc, title, description }) => {
  return (
    <div className='border-2 border-white-500 text-center'>
      <div className="relative w-full h-56 mt-5">
        <Image
          src={imageSrc || '/noImg.png'}
          alt="cardImg"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="text-black font-bold text-lg my-10 p-4">{title}</div>
      <div className="text-black text-left mb-5 p-4">{description}</div>
    </div>
  );
};
