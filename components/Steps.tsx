import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { STEPS } from '@/contants'

const Steps = () => {
  return (
    <div className='max-container padding-container '>
      <div className='flex flex-col md:flex-row gap-4 md:gap-8 justify-center w-full items-center md:items-start'>
        <Image
          src="/steps.png"
          alt="Description of the image"
          width={500}
          height={0}
          className='max-h-[40vh] min-[400px]:max-h-[55vh] md:max-h-[85vh] min-h-[50vh] min-[400px]:max-w-[380px] lg:max-w-[500px]'
        />
        <div className='relative z-1 flex flex-col xl:w-1/2 my-4 px-4 xl:px-12'>
          <h1 className='regular-32 lg:regular-52 text-gray-700 font-bold'>
              3 Quick Steps To Use Our Services
          </h1>
          <ul className='max-w-[600px] flex flex-col w-full pt-2'>
            {
              STEPS.map((step)=>(
                <li className='flex flex-col ' key={step.title}>
                  <div className='flex flex-row items-center gap-4 md:gap-8 lg:gap-12 '>
                    <div className='border-2 border-black rounded-full  w-5 h-5'></div>
                    <h1 className='bold-20'>{step.title}</h1>
                  </div>
                  <div className='flex flex-row items-center gap-4 md:gap-8 lg:gap-12 px-[10px]'>
                    <h1 className='border-l-2 border-black py-4 px-6 md:px-10 lg:px-14 regular-14 '>{step.description}</h1>
                  </div>
                </li>
              ))
            }
            <div className='flex flex-row items-center gap-4 md:gap-8 lg:gap-12 mt-1'>
              <Image
                src='/check.svg'
                alt='check'
                width={24}
                height={24}
                className=' border-2 border-black rounded-full'
              />
              <h1 className='bold-20 text-green-700'>DONE</h1>
            </div>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Steps
