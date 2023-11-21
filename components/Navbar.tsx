"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { BiSolidObjectsHorizontalRight } from "react-icons/bi";
import { NAV_LINKS } from '@/contants';
import Button from './Button';
import Image from 'next/image';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='max-h-screen  z-30 bg-white w-full fixed'>
      <div className='flexBetween padding-container py-3 '>
        <Link 
          href='' 
          className='flex items-center gap-2 '
        >
          <BiSolidObjectsHorizontalRight size="30px"/>
          <h1 className='text-lg md:text-2xl lg:text-3xl font-didot font-bold'>Adsco</h1>
        </Link>
        
        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link, key)=>(
              <Link 
                href={link.href} key={key} 
                className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold '
              >
                {link.label}
              </Link>
          ))}
        </ul>

        <div className='lg:flexCenter hidden'>
            <Button
              type='button'
              title="login"
              icon="/user.svg"
              variant="btn_dark_green"         
            />
        </div>
        <Image 
          src="menu.svg" 
          alt='menu' 
          width={24} height={24} 
          className='inline-block cursor-pointer lg:hidden' 
          onClick={() => setOpen(!open)}
        />
      </div>

      
      <div className={`${open? 'flex top-12' : 'top-[-100vh] '} transition-all duration-300 lg:hidden flex-col w-full  h-screen px-8  py-6  fixed bg-white z-1`}>
        <ul className='flex flex-col gap-4'>
          {NAV_LINKS.map((link, key)=>(
              <Link 
                href={link.href} key={key} 
                className='regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold '
              >
                {link.label}
              </Link>
          ))}
        </ul>
        <div className='py-16'>
            <Button
              type='button'
              title="login"
              icon="/user.svg"
              variant="btn_dark_green"         
            />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

