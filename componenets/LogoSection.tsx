import {  logos } from '@/constants'
import Image from 'next/image'
import React from 'react'

function LogoSection() {
  const LogoIcon = ({icon}:{icon:string})=>{
    return(
      <div className="flex justify-center items-center maquee-item aspect-square bg-cover" >
        <img loading='lazy' src={icon} alt="logos" className='md:w-auto md:h-52 h-[50rem]' />
      </div>
    )
  }
  return (
    <section id='tech' className='p-4 md:p-6'>
    <div  className='my-10 md:my-20 relative'>
      <div className="gradient-edge"/>
      <div className="gradient-edge"/>
      <div className='w-full flex justify-center text-center'>
        <div className='w-2/3 md:w-full'>
      <h2 className=' text-lg md:text-2xl font-bold font-mono'>Libraries & Technologies worked with :</h2>
        </div>
      </div>
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logos.map((icon,index)=>(
            <LogoIcon key={index} icon={icon}/>
          ))}
        </div>
      </div>
    </div>
          </section>
  )
}

export default LogoSection