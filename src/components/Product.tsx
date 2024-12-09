"use client"
import React, { useState } from 'react'
import { image } from './Assets/Assets'
import Image from 'next/image'
import { Heart } from 'lucide-react'

const Product = () => {
   const [count, setCount] = useState(0)

   const incrementHandler = () => {
      setCount(count + 1)
   }

   const decrementHandler = () => {
      setCount(count - 1)
   }

   return (
      <div className="mx-6 my-4 max-w-7xl">
         <div className="flex items-center gap-2">
            <p className="text-xs font-medium">Home</p>
            <p className="h-1 w-1 bg-gray-400 rounded-full"></p>
            <p className="text-[#9C9C9C] text-xs font-medium">Art de la table</p>
         </div>
         <div className="flex flex-col md:flex-row gap-6 mt-4">

            <div className="bg-[#F8F6F4] flex-1 md:w-[761px] md:h-[652px] flex p-3 rounded-md">
               <div className="flex flex-col gap-2">
                  <Image className="rounded" src={image.table} alt="error" />
                  <Image className="rounded opacity-60" src={image.table} alt="error" />
                  <Image className="rounded opacity-60" src={image.table} alt="error" />
                  <Image className="rounded opacity-60" src={image.table} alt="error" />
               </div>
               <div>
                  <Image src={image.machine} alt="error" />
               </div>
            </div>

            <div className="flex flex-col items-start w-full md:w-1/2 px-2 gap-2">
               <div className="flex justify-between items-center w-full">
                  <p className="md:text-3xl sm:text-sm font-[Playfair]">Cheese - appareil a raclette 1/2 roue</p>
                  <Heart className="hover:text-pink-500 cursor-pointer" />
               </div>
               <p>39,50 € <span className="text-xs text-[#9C9C9C] ml-2">/pièce</span></p>
               <p className="w-full border border-gray-200"></p>

               <div className="w-full border-b border-gray-200 flex items-center justify-between py-4">
                  <div className="flex items-center gap-2">
                     <Image className="w-6 h-5" src={image.capa} alt="error" />
                     <p className="text-xs font-medium">20cm</p>
                     <Image className="w-6 h-5" src={image.frame} alt="error" />
                     <p className="text-xs font-medium ">50cm</p>
                  </div>
                  <p className="text-xs text-[#9C9C9C]">
                     REF : VABGN5
                  </p>
               </div>

               <div className="text-xs text-[#5D5D5D] mt-2 h-[420px] border-b w-full">
                  <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue</p>
                  <p>Réglable en hauteur</p>
                  <p>Appareil à raclette professionnel</p>
                  <p>Boîtier de chauffe horizontal réglable en hauteur</p>
                  <p></p>
                  <p className="mt-4">220V</p>
                  <p>900W</p>
               </div>

               <div className="flex items-center gap-4 mt-2 w-full">
                  <div className="flex py-2 max-sm:py-1 items-center gap-6 border border-gray-300 px-4 rounded">
                     <button onClick={decrementHandler} className="text-sm text-[#5D5D5D]">-</button>
                     <p>{count}</p>
                     <button onClick={incrementHandler} className="text-sm text-[#5D5D5D]">+</button>
                  </div>
                  <button className="bg-[#5CD2DD] w-full max-sm:text-xs  md:p-2 max-sm:p-2  text-white rounded">AJOUTER AU PANIER</button>
               </div>
            </div>
         </div>

         <div className="flex flex-col md:flex-row items-start gap-6 mt-10">
            <div className="flex flex-col md:w-[711px] w-full pr-20">
               <p className="text-xl text-[#111928]">Description produit</p>
               <p className="text-xs text-[#9C9C9C] py-3">
                  Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".
               </p>
            </div>

            <div className="flex w-full md:w-1/2 items-center flex-col bg-[#FBF9F899] px-4 py-2 text-[#393939]">
               <div className="flex items-center w-full justify-between p-2">
                  <p>Livraisons</p>
                  <button className="text-xl">+</button>
               </div>
               <div className="flex items-center w-full justify-between p-2">
                  <p>Questions</p>
                  <button className="text-xl">+</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Product;
