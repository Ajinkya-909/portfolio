'use client';

import { logos } from '@/constants';
import Image from 'next/image';
import React from 'react';

function LogoSection() {
  const LogoIcon = ({ icon }: { icon: string }) => {
    return (
      <div className="marquee-item flex justify-center items-center p-2">
        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl shadow-md">
          <Image
            src={icon}
            alt="logo"
            fill
            className="object-contain"
            sizes="112px"
          />
        </div>
      </div>
    );
  };

  return (
    <section id="tech" >
      <div className="my-10 md:my-20 relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="w-full flex justify-center text-center">
          <div className="w-2/3 md:w-full">
            <h2 className="text-lg md:text-2xl font-bold font-mono">
              Libraries & Technologies worked with:
            </h2>
          </div>
        </div>

        <div className="marquee h-52 mt-6">
          <div className="marquee-box gap-8 md:gap-12">
            {logos.map((icon, index) => (
              <LogoIcon key={index} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoSection;
