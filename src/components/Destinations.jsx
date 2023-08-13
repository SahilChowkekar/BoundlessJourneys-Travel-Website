import React from 'react'

import BoraBora from '../assets/borabora.jpg';
import Italy2 from '../assets/Italy2.jpg';
import WaldorfAstoria from '../assets/WaldorfAstoria.jpg';
import Thailand from '../assets/Thailand.jpg';
import KeyWest from '../assets/keywest.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="/" />
            <img className='w-full h-full object-cover' src={Italy2} alt="/" />
            <img className='w-full h-full object-cover' src={WaldorfAstoria} alt="/" />
            <img className='w-full h-full object-cover' src={Thailand} alt="/" />
            <img className='w-full h-full object-cover' src={KeyWest} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations