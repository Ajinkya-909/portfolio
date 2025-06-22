'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

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
              <img loading='lazy' src="/images/project1.webp" alt="royalestates" />
            </div>
            <div className="text-content">
              <div className='flex justify-around items-center p-2 gap-2 '>
              <h2 className='font-bold'>Promptly</h2>
              <a className='text-cyan-600' href="https://promptly-ai-4u.vercel.app/" target='_blank'>Project Link</a>
              </div>
              <p className="text-white-50 md:text-xl">An AI-powered content generation tool that helps users instantly create social media posts, captions, and marketing content from custom prompts.</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project " ref={project2Ref}>
              <div className='aspect-square w-4/5 relative mx-auto'>
                <img loading='lazy' src="/images/project2.webp" alt="CHITCHAT" />
              </div>
              <div className='flex justify-around items-baseline p-2 gap-2 '>
              <h2 className='font-semibold'>Podcaster</h2>
              <a className='text-cyan-600' href="https://poadcaster.vercel.app/" target='_blank'>Project Link</a>
              </div>
            </div>

            <div className="flex flex-col justify-around items-center w-full gap-4" ref={project3Ref}>
              <div className='w-full  flex justify-around items-baseline p-2 gap-2 rounded-lg border-2 border-b-indigo-300'>
              <p className='text-xl font-semibold'>💭 Chit Chat App</p>
              <a className='text-cyan-600' href="https://chit-chat-app-l7os.onrender.com/login" target='_blank'>Project Link</a>
              </div>
              <div className='w-full  flex justify-around items-baseline p-2 gap-2 rounded-lg border-2 border-b-indigo-300'>
              <p className='text-xl font-semibold'>🏰 Royal Estates</p>
              <a className='text-cyan-600' href="https://real-estate-app-project.onrender.com/" target='_blank'>Project Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
