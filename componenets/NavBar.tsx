"use client"
import { navLinks } from '@/constants'
import React from 'react'

function NavBar() {
  return (
    <header className='navbar bg-black rounded-4xl'>
      <div className="inner">
        <a href="#hero" className="logo">
          AJINKYA DESHMUKH
        </a>
        <nav className='desktop'>
          <ul>

          {navLinks.map(({link,name})=>(
            <li key={name} className="group">
              <a href={link}>
                <span>{name}</span>
                <span className="underline"/>
              </a>
            </li>
          ))}
          </ul>
        </nav>
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact Me</span>
            </div>
          </a>
      </div>
    </header>
  )
}

export default NavBar