import React from 'react'
import Card from './Card'

const ThreeProduct = () => {
   return (
      <div className='max-w-7xl px-6 md:h-[520px] mt-16 py-6 text-[#393939]'>
         <div className='flex items-center justify-between max-sm:flex-col'>
            <p className='text-2xl max-sm:text-xl max-sm:text-center font-semibold'>Ces produits pourraient vous intéresser</p>
            <p className='text-xs border-b-2 border-[#393939] cursor-pointer'>VOIR TOUTE LA COLLECTION</p>
         </div>

        
         <div className='flex flex-wrap md:justify-between mt-6'>
            
            {Array.from({ length: 3 }).map((_, index) => (
               <div key={index} className="w-full sm:w-[48%] md:w-[30%] lg:w-[30%] p-2">
                  <Card />
               </div>
            ))}
         </div>
      </div>
   )
}

export default ThreeProduct
