"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Techstack = () => {
  const items = [
    { title: "Frontend", name: "NEXT JS", image: "/techstack/nextjs.svg" },
    { title: "Backend", name: "EXPRESS", image: "/techstack/expressjs.svg" },
    { title: "Databases", name: "MONGO DB", image: "/techstack/mongodb.svg" },
    { title: "Frontend", name: "REACT JS", image: "/techstack/reactjs.svg" },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isMobile = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 768;
  };
  if (!isMobile) {
    useGSAP(() => {
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
              start: "top bottom-=100",
            },
          }
        );
      });
  
      if (sectionRef.current) {
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
      }
    }, []);
    
  }


  return (
    <div id="techstack" ref={sectionRef} className="p-4 m-8">
      <div className="flex justify-center items-center m-6">
        <h1 className="mb-5 font-extrabold text-4xl">Preferred TechStack</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {containerRefs.current[index] = el}}
            className="flex flex-col items-center border-2 border-white-50 shadow-md rounded-xl p-4"
          >
            <h2 className="md:text-4xl text-2xl text-white font-semibold mb-2">{item.title}</h2>
            <img loading='lazy' src={item.image} alt={item.name} className="w-auto h-40 max-sm:w-full max-sm:h-auto object-cover rounded-md mb-2" />
            <p className="text-lg text-gray-400">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
