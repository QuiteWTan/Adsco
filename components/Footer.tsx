import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/contants'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { BiSolidObjectsHorizontalRight } from 'react-icons/bi'

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({title, children}: FooterColumnProps) => {
  return(
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='flexCenter mb-12'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row '>
          <Link 
            href='' 
            className='flex items-center gap-2  mb-10'
          >
            <BiSolidObjectsHorizontalRight size="30px"/>
            <h1 className='text-lg md:text-2xl lg:text-3xl font-didot font-bold'>Moneda</h1>
          </Link>
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((column, index)=>(
              <FooterColumn title={column.title} key={index}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {column.links.map((link)=>(
                    <Link href='/' key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {
                  FOOTER_CONTACT_INFO.links.map((link)=>(
                    <Link href='/' key={link.label} className='flex gap-4 md:flex-col lg:flex-row items-center'>
                      <p className='whitespace-nowrap'>{link.label}:</p>
                      <p className='medium-14 whitespace-nowrap text-blue-70'>{link.value}</p>
                    </Link>
                  ))
                }
              </FooterColumn>
            </div>
            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='regular-14 flex gap-4 text-gray-30'>
                  {SOCIALS.links.map((link) => (
                    <Link href='/' key={link}>
                      <Image src={link} alt='logo' width={24} height={24}/>
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className='border-t-2 border-gray-20 py-2'>
          <p className='regular-14 w-full text-center text-gray-30'> @Copyright 2023 Moneda | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
