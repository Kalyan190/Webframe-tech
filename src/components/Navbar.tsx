"use client"
import Link from 'next/link';
import { image } from './Assets/Assets';
import Image from 'next/image';
import { useState } from 'react';
import { Heart } from 'lucide-react';

const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [activeLink, setActiveLink] = useState('/')

   const handleLinkClick = (path:string) => {
      setActiveLink(path);
   };

   return (
      <nav className="bg-white text-black px-4 py-2 border-b">

         <div className="max-w-7xl mx-auto flex justify-between items-center">

            <div className="flex items-center gap-2">
               <Link href="/" className="text-2xl font-bold">
                  <Image src={image.company_logo} alt="error" className="w-[64.12px]" />
               </Link>

               <div className="flex items-center md:w-[700px] h-[40px] px-4 bg-[#F9FAFB] rounded md:justify-between max-sm:justify-center max-sm:ml-6 hover:border hover:border-[#0093D0]">
                  <input
                     type="text"
                     placeholder="Rechercher un product"
                     className="border-none h-[18px] max-sm:w-[90px] md:w-[600px] outline-none bg-[#F9FAFB]"
                  />
                  <div className="bg-white max-sm:hidden">
                     <Image src={image.search} alt="error" />
                  </div>
               </div>
            </div>

            <div className="hidden md:flex items-center text-[#3B4347] gap-4">

               <div className="flex items-center gap-1">
                  <Image src={image.light} alt="error" />
                  <p className="text-xs font-medium">Inspirations</p>
               </div>

               <div className="flex items-center gap-1">
                  <Heart className='hover:text-pink-500 cursor-pointer' />
                  <p className="text-xs font-medium">Mes favoris</p>
                  <button className="text-xs bg-[#CAD2D566] rounded-full px-2 font-medium">24</button>
               </div>

               <div className="flex items-center bg-[#0093D0] text-white p-2 rounded gap-2 cursor-pointer">
                  <Image src={image.shoping} alt="error" />
                  <p className="text-xs font-medium">Painer</p>
               </div>

               <div className="flex items-center gap-4">
                  <Image className="h-[44px] w-[44px] rounded-full" src={image.avatar} alt="error" />
                  <div className="flex gap-1">
                     <p>FR</p>
                     <Image src={image.vector} alt="error" />
                  </div>
               </div>
            </div>

            <div className="md:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
               <div className="w-6 h-6 flex flex-col justify-between items-center space-y-1">
                  <div className="w-6 h-1 bg-black"></div>
                  <div className="w-6 h-1 bg-black"></div>
                  <div className="w-6 h-1 bg-black"></div>
               </div>
            </div>
         </div>

         {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg p-4">
               <ul className="space-y-4">
                  {[
                     { name: 'ART DE LA TABLE', path: '/' },
                     { name: 'MOBILIER', path: '/dashboard' },
                     { name: 'NAPPAGE', path: '/dashboard' },
                     { name: 'MATERIEL DE SALLE', path: '/dashboard' },
                     { name: 'BARBECUE', path: '/dashboard' },
                     { name: 'TENTE', path: '/dashboard' },
                     { name: 'CHAUFFAGE', path: '/dashboard' },
                     { name: 'PODIUM-PISTE DE DANSE', path: '/dashboard' },
                     { name: 'SON ET LUMIERE', path: '/dashboard' },
                     { name: 'PACKS', path: '/dashboard' },
                     { name: 'CONSOMMABLES', path: '/dashboard' },


                  ].map((link) => (
                     <li key={link.name}>
                        <Link
                           href={link.path}
                           className={`${activeLink === link.path ? 'text-blue-500 border-b-2 border-blue-600' : 'text-gray-700'
                              } hover:text-blue-500 `}
                           onClick={() => handleLinkClick(link.path)}
                        >
                           {link.name}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         )}

         <div className="max-w-7xl mx-auto flex items-center">
            <ul className="hidden md:flex items-center justify-between w-full text-xs font-medium mt-3">
               {[
                  { name: 'ART DE LA TABLE', path: '/' },
                  { name: 'MOBILIER', path: '/dashboard' },
                  { name: 'NAPPAGE', path: '/dashboard' },
                  { name: 'MATERIEL DE SALLE', path: '/dashboard' },
                  { name: 'BARBECUE', path: '/dashboard' },
                  { name: 'TENTE', path: '/dashboard' },
                  { name: 'CHAUFFAGE', path: '/dashboard' },
                  { name: 'PODIUM-PISTE DE DANSE', path: '/dashboard' },
                  { name: 'SON ET LUMIERE', path: '/dashboard' },
                  { name: 'PACKS', path: '/dashboard' },
                  { name: 'CONSOMMABLES', path: '/dashboard' },


               ].map((link) => (
                  <li key={link.name}>
                     <Link
                        href={link.path}
                        className={`${activeLink === link.path ? 'text-blue-500 border-b-2 border-blue-600' : 'text-gray-700'
                           } hover:text-blue-500 `}
                        onClick={() => handleLinkClick(link.path)}
                     >
                        {link.name}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>

      </nav>
   );
};

export default Navbar;
