import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='flex flex-col max-container w-full relative my-20'>
      <div className='bg-gray-800 h-4/5 absolute w-full z-1 rounded-lg 2xl:rounded-5xl'></div>
      <div className='p-8 z-10'>
        <div className=' text-white w-full flex flex-col md:flex-row justify-between'>
          <h1 className='bold-20 md:bold-40'>Easy & Convenient <br />Design to Your Heart Content!</h1>
          <p className='max-w-[400px] font-poppins regular-14 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className='flex flex-wrap w-full justify-center z-10 gap-4 md:gap-6 lg:gap-10 '>
        <div className='flex flex-col w-[250px] md:w-[300px] lg:w-[340px] h-[280px] md:h-[370px] lg:h-[440px] shadow-xl border bg-white rounded-5xl overflow-hidden relative'>
          <div className='px-6 pt-6 flex flex-col gap-2 w-full'>
            <h1 className='bold-18 md:bold-20 lg:bold-28'>Instant Delivery, <br/>With Just One click</h1>
            <p className='text-xs md:text-sm lg:text-base font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <Image
              src='/Features1.png'
              alt='/'
              width={300}
              height={300}
              className='w-[180px] md:w-[220px] lg:w-[280px] h-[150px] md:h-[230px] lg:h-[280px] bottom-[-20px] right-[-20px] absolute'
            />
        </div>
        <div className='flex flex-col w-[250px] md:w-[300px] lg:w-[340px] h-[280px] md:h-[370px] lg:h-[440px] shadow-xl border bg-white rounded-5xl overflow-hidden relative'>
          <div className='px-6 pb-6 flex flex-col gap-2 w-full absolute bottom-0 left-0'>
            <h1 className='bold-18 md:bold-20 lg:bold-28'>Instant Delivery, <br/>With Just One click</h1>
            <p className='text-xs md:text-sm lg:text-base font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <Image
              src='/Features3.png'
              alt='/'
              width={300}
              height={300}
              className='w-[250px] md:w-[300px] lg:w-[380px] h-[220px] md:h-[280px] lg:h-[320px] top-[-60px] right-[-40px] absolute'
            />
        </div>
        <div className='flex flex-col w-[250px] md:w-[300px] lg:w-[340px] h-[280px] md:h-[370px] lg:h-[440px] shadow-xl border bg-white rounded-5xl overflow-hidden relative'>
          <div className='px-6 pt-6 flex flex-col gap-2 w-full absolute top-0 left-0'>
            <h1 className='bold-18 md:bold-20 lg:bold-28'>Instant Delivery, <br/>With Just One click</h1>
            <p className='text-xs md:text-sm lg:text-base font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <Image
              src='/Features2.png'
              alt='/'
              width={300}
              height={300}
              className='w-[250px] md:w-[300px] lg:w-[460px] h-[220px] md:h-[280px] lg:h-[320px] bottom-[-80px] left-[-60px] absolute'
            />
        </div>
      </div>
    </div>
  )
}

export default Features
