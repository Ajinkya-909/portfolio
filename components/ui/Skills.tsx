'use client';

import { skills } from '@/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const mobile = typeof window != 'undefined' && window.innerWidth <= 768;

    if (!mobile && skillsRef.current) {
      gsap.fromTo(
        skillsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top bottom-=100',
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className='md:mt-30 flex flex-col justify-center items-center' id='skills'>
      <div className='flex justify-center items-center'>
        <h1 className='mb-5 md:mb-10 font-extrabold text-4xl'>Skills</h1>
      </div>
      <div
        ref={skillsRef}
        className='m-4 flex justify-around items-center flex-wrap gap-2 md:gap-5'
      >
        {skills.map((skill: string, index: number) => (
          <div
            key={index}
            className='p-4 skills_card font-bold text-xl text-center bg-black-100 rounded-4xl hover:bg-white hover:text-black transition-all duration-300'
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
