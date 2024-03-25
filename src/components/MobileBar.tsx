'use client'
import React from 'react'
import { navLinks } from '@/constants'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


const MobileBar = () => {
  const pathname = usePathname();
  return (
    
   <header className='  bg-[#faf2e8]   lg:hidden  w-full h-16  '>
  <nav className=' w-full flex items-center px-6 bg-yellow-100 ' >
   <Link href='/' className='w-full '> 
   <Image src='/assets/images/logo-1.png' alt='logo' className='object-contain' width={110} height={8}/>
   </Link>
<SignedIn>

<Sheet >
  
  <SheetTrigger className='flex items-center gap-3' >
  <UserButton afterSignOutUrl='/'/>
    <Image src='/assets/images/ham-1.svg' height={30} width={30} alt='menu'/>
  </SheetTrigger>
 
  <SheetContent className='sm:w-64 w-[17rem] flex flex-col lg:hidden bg-yellow-100'>
    <>
    <Image src='/assets/images/logo-1.png' alt='logo' width= {120} height={10}/>
    <ul className='flex flex-col  gap-2 w-[300px] h-full  ' >
  {navLinks.map((link)=>{
    
    const  isActive = link.route === pathname;
    return(
      <li className={`bg-[#fdd5c8] w-full  text-center text-white font-md rounded-full  hover:bg-[#e67aa0]`}>
        <Link href={link.route} className={` p-[10px] flex items-center gap-2 {isActive ? 'bg-purple-700  text-slate-400' : 'bg-purple-500' } text-slate-500 font-semibold `} >
          <Image src={link.icon} alt="icon" height={30} width={30} className='brightness-75' />
          {link.label}
        </Link>
      </li>
      )
    
  })}
 

 
  
    


   
 </ul>
 
    </>
    
  </SheetContent>
</Sheet>
</SignedIn>
<SignedOut>
  <button className='bg-black rounded-md text-white px-2 py-1 hover:bg-slate-800 hover:text-gray-200'>
    <Link href='/sign-in' className='font-semibold'>Login</Link>
  </button>
</SignedOut>

    </nav>


   </header>
  )
}

export default MobileBar