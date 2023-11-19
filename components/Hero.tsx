import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { AiOutlineCaretRight } from "react-icons/ai";

const Hero = () => {
  return (
    <section className='max-container padding-container justify-center items-center md:items-start flex flex-col gap-8 py-16 md:pb-32  md:py-20 md:flex-row-reverse z-10'>
        <div className='relative'>
          <Image
            src="/heroApp.png"
            alt="Description of the image"
            width={500}
            height={0}
            className='max-h-[40vh] min-[400px]:max-h-[55vh] md:max-h-[85vh] min-h-[50vh] min-[400px]:max-w-[380px] lg:max-w-[500px]'
          />
          <div className='absolute flex flex-1 items-start bottom-0 left-0 '>
            <div className='relative z-20 w-[200px] h-[120px] md:w-[268px] md:h-[190px]  gap-8 rounded-3xl bg-white backdrop-blur-2xl border-2 shadow-2xl overflow-hidden'>
              <Image
                src="/FloatingCard1.jpg"
                alt='card1'
                width={268}
                height={0}
                className='w-full h-full max-w-full max-h-full absolute brightness-50'
              />
              <div className='flex flex-col absolute gap-2  w-full px-3 md:px-7 py-4 md:py-8'>
                <div className='flex flex-col pb-2 '>
                  <p className='regular-14 md:regular-20 text-white/70'>Customizeable</p>
                  <p className='text-xs md:text-base text-white'>
                    Take Bakery Experience To The Next Level -{'>'}          
                  </p>
                  <p className='text-sm md:text-xl font-bold mt-2 md:mt-6 text-white font-didot'>Bun.co</p>
                </div> 
              </div>
            </div>
          </div>
          <div className='absolute flex flex-1 items-start top-0 right-0 md:right-[-20px]'>
            <div className='relative z-20 w-full max-w-[270px] flex-col gap-8 rounded-3xl bg-white backdrop-blur-2xl justify-center px-2 md:px-5 py-2 md:py-5 border-2 shadow-2xl'>
                <div className='flex flex-row pb-2 gap-2'>
                  <Image
                      src="/FloatingCard2.png"
                      alt="house"
                      width={100}
                      height={0}
                      className='max-w-[100px] h-[80px] w-[60px] md:w-[100px] md:h-[120px] '
                  />
                  <div className='flex justify-center flex-col  font-poppins'>
                    <p className='regular-14 text-gray-700'>Chocolate Cake</p>
                    <div className='flex items-center gap-1'>
                      {
                        [...Array(5)].map((_, index)=>(
                          <Image
                            src='/star.svg'
                            alt='star'
                            key={index}
                            width={12}
                            height={12}
                          />
                        ))
                      }
                    </div>
                    <p className='regular-16 md:regular-20 text-gray-700 font-bold'>$ 172</p>
                    <button className='px-2 py-1 bg-[#BCA37F] text-white regular-14 rounded-3xl'>Purchase</button>
                  </div>

                </div>
              </div>
          </div>
        </div>
        <div className='relative z-1 flex flex-col xl:w-1/2 my-8 md:my-16'>
            <h1 className='regular-32 lg:regular-52  font-poppins text-gray-500'>
                Mobile App <span className='font-bold'>Bun.co</span><br /> 
                For Every Loving<br/>
                <span className=' font-bold'>Baked Bread </span>
            </h1>
            <p className='regular-16 mt-6 text-gray-30 max-w-[520px]'>Revolutionize your home decor with our innovative mobile furniture app, bringing style and functionality to your fingertips.</p>

            <div className='flex flex-col w-full gap-3 lg:flex-row my-6'>
                <Button
                  type='button'
                  title='Download App'
                  variant='btn_dark_green'
                />
                <Button
                  type='button'
                  title='How We Work'
                  icon='/arrowHero.png'
                  variant='btn_white_text'
                />
            </div>
            <div className=' flex flex-wrap gap-5'>
              <h1 className='bold-32 md:bold-40 lg:bold-52'>4.8</h1>
              <div className='flex flex-col  gap-2'>
                <div className='flex items-center gap-2'>
                  {
                    [...Array(5)].map((_, index)=>(
                      <Image
                        src='/star.svg'
                        alt='star'
                        key={index}
                        width={24}
                        height={24}
                      />
                    ))
                  }
                </div>
                <p>
                  <span className='bold-16 '>18.000+</span>
                  <span className='regular-16 ml-1'> Reviews</span>
                </p>
              </div>
            </div>
        </div>
        
    </section>
  )
}

export default Hero
