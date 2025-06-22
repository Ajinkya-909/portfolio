'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Techstack = () => {
  const items = [
    { title: 'Frontend', name: 'NEXT JS', image: '/techstack/nextjs.svg' },
    { title: 'Backend', name: 'EXPRESS', image: '/techstack/expressjs.svg' },
    { title: 'Databases', name: 'MONGO DB', image: '/techstack/mongodb.svg' },
    { title: 'Frontend', name: 'REACT JS', image: '/techstack/reactjs.svg' },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) return; // Skip animation on mobile

    containerRefs.current.forEach((card, index) => {
      if (!card) return;
      const isEven = (index + 1) % 2 === 0;

      gsap.fromTo(
        card,
        { opacity: 0, x: isEven ? 50 : -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.1 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });

    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    }
  }, []);

  return (
    <div id="techstack" ref={sectionRef} className="py-12 px-4 md:px-20">
      <div className="flex justify-center items-center mb-10">
        <h1 className="font-extrabold text-3xl md:text-4xl text-center">Preferred TechStack</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              containerRefs.current[index] = el;
            }}
            className="flex flex-col items-center border border-white/50 shadow-md rounded-xl p-6 bg-[#1a1a1a]"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">{item.title}</h2>
            <img
              loading="lazy"
              src={item.image}
              alt={item.name}
              className="h-32 w-auto object-contain mb-3"
            />
            <p className="text-md text-gray-300">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
