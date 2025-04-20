
import React from 'react'
import { words } from '../constants'
import Button from './ui/Button'
import Model from './ui/Model'
import Image from 'next/image'



const Hero = () => {

  return (
    <section id='hero' className='relative max-sm:overflow-auto overflow-hidden'>
       
        <div className='absolute left-0 top-0 z-10'>
            <img src="/images/bg.png" alt="bgimage" />
        </div>
        <div className='hero-layout'>
            <header className='flex flex-col h-[50vh] md:w-7/12 w-full justify-center px-4 md:px-20'>
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>
                            Innovating 
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word,index)=>(
                                        <span key={index} className='flex items-center md:gap-3 gap-1'>
                                            <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>and Creating</h1>
                        <h1>Real World Projects</h1>
                    </div>
                    <p className='text-white-50 relative md:text-xl z-10 pointer-events-none:'>
                    Hi Ajinkya Here, I build fast, responsive, and scalable web applications that deliver real value. From crafting engaging front-end interfaces to developing powerful back-end systems.
                    </p>
                    <Button
                    
                    className='md:w-80 md:h-10 w-60 h-12  '
                    id='tech'
                    text='See My Works'
                    />
                </div>
            </header>
            <div className='max-md:hidden max-md:h-96 w-4/12 flex justify-center items-center'>
            <Model/>
            </div>
        </div>
    </section>
  )
}

export default Hero