import React from 'react'
import burjkhalifa from '../assets/burjkhalifa.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Japan from '../assets/Japan.jpg';
import Italy from '../assets/Italy.jpg';
import Spain from '../assets/Spain.jpg';
import Switzerland from '../assets/Switzerland.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
    <h1>POPULAR DESTINATION</h1>
    <p className='py-4 text-center '>Here, indeed, there is a kind of likeness, just first,
     neither nobody, course. Both the praised vestibule. Let the duty of ornamental 
     gentleness be held, they are fitting</p>
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={burjkhalifa} text='Dubai' />
    <SelectsCard bg={Japan} text='Japan' />
    <SelectsCard bg={BoraBora2} text='Maldives' /> 
    <SelectsCard bg={Italy} text='Italy' />
    <SelectsCard bg={Spain} text='Spain' />
    <SelectsCard bg={Switzerland} text='Switzerland' />
    
        
    </div>
    </div>
    
  )
}

export default Selects