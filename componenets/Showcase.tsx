'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

function Showcase() {
  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)

  const isMobile = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 768;
  };
  
  if (!isMobile) {
    useGSAP(() => {
      const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
  
      projects.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: 0.2 * (index + 1),
              scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
              },
            }
          )
        }
      })
  
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5 }
        )
      }
    }, [])
    
  }


  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className="flex justify-start items-center">
        <h1 className='mb-20 mb:10 font-extrabold text-4xl'>Work Experience</h1>
      </div>
      <div className="w-full">
        <div className='showcaselayout'>
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img loading='lazy' src="/images/project1.png" alt="royalestates" />
            </div>
            <div className="text-content">
              <h2 className="">Podcaster</h2>
              <p className="text-white-50 md:text-xl"> A podcast streaming and management platform built with Next.js. It allows users to listen to podcasts, manage their subscriptions, and explore different podcast series with a clean, modern interface.</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img loading='lazy' src="/images/project2.png" alt="CHITCHAT" />
              </div>
              <h2>Royl Estates</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img loading='lazy' src="/images/project3.jpeg" alt="CHITCHAT" />
              </div>
              <h2>Chit Chat App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
