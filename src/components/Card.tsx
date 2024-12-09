"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { image } from './Assets/Assets'
import { Heart } from 'lucide-react'

const Card = () => {
   const [count, setCount] = useState(0)

   const incrementHandler = () => {
      setCount(count + 1)
   }

   const decrementHandler = () => {
      setCount(count - 1)
   }

   return (
      <div className='w-full  md:w-[330px] md:h-auto  flex flex-col items-center'>
         <div className='group bg-[#F9F7F5] h-[362px] w-full p-4 mt-5 rounded-lg shadow-md'>
           
            <div className='flex items-center justify-between'>
               <Heart className='hover:text-pink-600 cursor-pointer' />
               <p className='text-xs bg-white font-semibold p-1 rounded'>ART DE LA TABLE</p>
            </div>

           
            <div className='flex items-center justify-center'>
               <Image className='md:w-[224px] md:h-[224px] object-cover group-hover:h-[230px] transition-all duration-300 cursor-pointer' src={image.bigtable} alt='Product Image' />
            </div>

           
            <div className='group-hover:flex items-center justify-between bg-white p-2 text-xs rounded hidden transition-all duration-300 mt-4'>
               <p>QTE</p>
               <div className='flex items-center justify-between p-2 rounded bg-[#F3F3F366] w-[160px]'>
                  <button onClick={decrementHandler} className='text-lg text-[#5D5D5D] '>-</button>
                  <p className='text-sm font-medium text-black'>{count}</p>
                  <button onClick={incrementHandler} className='text-lg text-[#5D5D5D]'>+</button>
               </div>
               <p className='w-[74px] text-center bg-[#EE4197] p-2 rounded text-white cursor-pointer'>Ajouter</p>
            </div>
         </div>

         <div className='flex items-center justify-between w-full px-4 py-2 mt-2'>
            <p className='text-lg font-medium'>Title</p>
            <p className='text-lg font-medium'>0€</p>
         </div>

       
         <div className='flex items-center justify-between w-full text-xs text-[#9C9C9C] px-4 pb-2'>
            <p>0,35€/Pièce · RÉF : VABGN5</p>
            <p className='px-2 py-1 bg-gray-100 rounded-full'>20 pieces</p>
         </div>
      </div>
   )
}

export default Card
