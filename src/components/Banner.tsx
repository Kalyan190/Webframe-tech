import React from 'react'
import Image from 'next/image'
import { image } from './Assets/Assets'
import { MoveRightIcon } from 'lucide-react'

const Banner = () => {
   return (
      <div className="w-full bg-pink-50 min-h-[560px] flex justify-center py-10 text-center md:mt-16">

         <div className="max-w-7xl px-6">
            <p className="text-xl">On s&rsquo;occupe de <span className="font-bold text-[#5CD2DD]">tout</span></p>
            <p className="text-xs text-[#9C9C9C] mt-2">Office ipsum you must be muted. It meeting commitment busy pain</p>


            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
               <div className="flex flex-col items-center gap-2">
                  <Image src={image.track} alt="Livraison" />
                  <p>Livraison & Reprise</p>
                  <p className="text-xs text-[#9C9C9C]">Selon vos besoins</p>
               </div>

               <div className="flex flex-col items-center gap-2">
                  <Image src={image.dish} alt="Nettoyage" />
                  <p>Nettoyage</p>
                  <p className="text-xs text-[#9C9C9C]">Selon vos besoins</p>
               </div>

               <div className="flex flex-col items-center gap-2">
                  <Image src={image.store} alt="Commande Illimitée" />
                  <p>Commande Illimitée</p>
                  <p className="text-xs text-[#9C9C9C]">Tout est possible</p>
               </div>

               <div className="flex flex-col items-center gap-2">
                  <Image src={image.van} alt="Transport" />
                  <p>Transport & Enlèvement</p>
                  <p className="text-xs text-[#9C9C9C]">On s&rsquo;occupe de tout</p>
               </div>
            </div>


            <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-10">

               <div className="w-full sm:w-1/2">
                  <Image src={image.sofa} alt="Sofa" />
               </div>


               <div className="w-full sm:w-1/2 bg-[#f3cfe1] md:py-8 px-4 rounded-lg flex flex-col items-center gap-4 ">
                  <p className="text-xl font-medium">
                     S&rsquo;inscrire & economiser <span className="text-[#5CD2DD]">10%</span>
                  </p>
                  <p className="text-xs text-[#BDA2B0] text-left">
                     Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn&rsquo;t. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
                  </p>


                  <div className="w-full flex items-center gap-4 mt-4">
                     <input
                        className="p-2 w-full sm:w-[410px] rounded"
                        type="text"
                        placeholder="john@doe.com"
                     />
                     <button className="py-2 px-4 rounded flex bg-[#5CD2DD] text-white items-center">
                        S&rsquo;INSCRIBE <MoveRightIcon />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner
