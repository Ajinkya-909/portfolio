'use client'
import Image from 'next/image';
import React from 'react'

const Button = ({text,className,id}:{text:string,className:string,id:string}) => {
  return (
    <a
    
    onClick={(e)=>{
      e.preventDefault();
      
      const target = document.getElementById('tech');

      if (target && id) {
        const offset = window.innerHeight * 0.15;

        const top = target.getBoundingClientRect().top + window.scrollY-offset;

        window.scrollTo({top,behavior:'smooth'})
      }

    }} 
    href="" className={`${className ?? ''} cta-wrapper`}>
        <div className="cta-button group">
            <div className='bg-circle'/>
            <p className='text'>{text}</p>
            <div className="arrow-wrapper">
                <Image src="/images/arrow-down.svg" width={10} height={10} alt="arrow" />
            </div>
        </div>
    </a>
  )
}

export default Button