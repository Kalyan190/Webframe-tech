import React from 'react'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from './ui/carousel'
import Card from './Card'

const ArticleSimilar = () => {
   return (
      <div className='max-w-7xl px-6 bg-[#FBF9F899] mt-16 py-6 text-[#393939]'>
         
         <div className='flex items-center justify-between max-sm:flex-col'>
            <p className='md:text-2xl max-sm:text-xl font-semibold'>Articles similaires</p>
            <p className='text-xs border-b-2 border-[#393939] cursor-pointer '>VOIR TOUTE LA COLLECTION</p>
         </div>

        
         <div className='mx-4 mt-6'>
            <Carousel
               opts={{
                  align: "start",
               }}
               className="w-full p-3"
            >
               <CarouselContent>
                 
                  {Array.from({ length: 5 }).map((_, index) => (
                     <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                           <Card />
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>

              
               <div className="flex justify-between mt-4">
                  <CarouselPrevious className='bg-[#5CD2DD] rounded text-white w-[50px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-[#4bb5c9]' />
                  <CarouselNext className='bg-[#5CD2DD] rounded text-white w-[50px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-[#4bb5c9]' />
               </div>
            </Carousel>
         </div>
      </div>
   )
}

export default ArticleSimilar
