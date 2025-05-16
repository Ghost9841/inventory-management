"use client"

import { Menu } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



const SideBar = () => {
  return (
    <section id="sidebar">
        {/* Top Logo */}
        <div  className="flex gap-3 justify-between md:justify-normal items-center pt-8">
            <img src="" alt="logo" className="" />
            <h1 className="font-extrabold text-2xl">Tech Nest</h1>
        
        <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={()=> {}}>
            <Menu className='w-4 h-4'/>
        </button>
        </div>

        {/* Links */}
        <div className="flex-grow mt-8">
            {/* Links */}
        </div>

        {/* Footer */}
        <div className="">
            <p className="text-center text-xs text-gray-500">&copy; 2025 Tech Nest</p>

        </div>
    </section>
  )
}

export default SideBar