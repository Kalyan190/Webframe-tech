import Image from 'next/image'
import React from 'react'
import { image } from './Assets/Assets'
import { InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'

const Footer = () => {
   return (
      <div className="max-w-7xl px-8 py-8 border-t flex flex-col sm:flex-row justify-between gap-8">
       
         <div className="flex gap-12 flex-wrap sm:flex-nowrap">
          
            <div>
               <Image src={image.company_logo} alt="Company Logo" />
            </div>

           
            <div className="flex flex-col items-start text-left text-[#393939]">
               <p className="font-medium mb-2">INFOS PRATIQUES</p>
               <p className="text-sm mb-1">À propos</p>
               <p className="text-sm mb-1">Livraisons & Reprises</p>
               <p className="text-sm mb-1">Mode d’emploi</p>
               <p className="text-sm">F.A.Q</p>
            </div>

            
            <div className="flex flex-col items-start text-left text-[#393939]">
               <p className="font-medium mb-2">LÉGAL</p>
               <p className="text-sm mb-1">Mentions légales</p>
               <p className="text-sm mb-1">CGU</p>
               <p className="text-sm mb-1">CGV</p>
               <p className="text-sm">Politique de confidentialité</p>
            </div>

            
            <div className="flex flex-col items-start text-left text-[#393939]">
               <p className="font-medium mb-2">MON COMPTE</p>
               <p className="text-sm mb-1">Accéder à mon compte</p>
               <p className="text-sm mb-1">Ma liste d’envie</p>
               <p className="text-sm mb-1">Créer un compte</p>
               <p className="text-sm">Mot de passe oublié</p>
            </div>
         </div>

         
         <div className="flex flex-col items-start sm:items-end text-right text-[#393939] max-sm:text-left">
            <p className="font-medium w-full mb-4">NOUS SUIVRE</p>
            <div className="flex items-center gap-4 cursor-pointer">
               
               <span className="border rounded p-2 hover:bg-gray-200 transition-all">
                  <TwitterIcon className="w-6 h-6 " />
               </span>
               <span className="border rounded p-2  hover:bg-gray-200 transition-all">
                  <InstagramIcon className="w-6 h-6" />
               </span>
               <span className="border rounded p-2  hover:bg-gray-200 transition-all">
                  <LinkedinIcon className="w-6 h-6 " />
               </span>
            </div>
         </div>
      </div>
   )
}

export default Footer
