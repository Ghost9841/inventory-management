"use client"

import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed } from '@/state'
import {  Archive, CircleDollarSign, Clipboard, Layout, LucideIcon, Menu, Settings2, Sidebar, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
}
const SidebarLink = ( {
    href,
    icon: Icon,
    label,
    isCollapsed,
}: SidebarLinkProps) => {
    const pathName = usePathname();
    const isActive = pathName === href || (pathName === "/" && href === "/dashboard")

    return (
        <Link href={href}>
            <section className={`cursor-pointer flex items-center 
            ${
                isCollapsed ? "justify-center py-4 " : "justify-start px-8 py-4"
            } hover:text-blue-500 hover:bg-blue-500 transition-colors ${
             isActive ?"bg-blue-200 text-white " : ""  }
                }`}>

                    <Icon className='w-6 h-6 !text-gray-700'/>
                    <span className={`ml-4 ${isCollapsed ? "hidden" : "block" } font-md text-gray-700`}>{label}</span>
                </section>
        </Link>
    )
}

const SideBar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };
    const sidebarClass = `fixed flex flex-col ${isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64'
        } bg-gray-50 transition-all duration-300 overflow-hidden h-full shadow-md z-40`

    return (
        <section id="sidebar" className={sidebarClass}>
            {/* Top Logo */}
            <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8   "}`}>
                {/* <img src="" alt="logo" className="" /> */}
                <div className="">logo</div>
                <h1 className={` ${isSidebarCollapsed ? "hidden" : "block" }  font-extrabold text-2xl`}>Tech Nest</h1>

                <button className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100" onClick={toggleSidebar}>
                    <Menu className='w-4 h-4' />
                </button>
            </div>

            {/* Links */}
            <div className="flex-grow mt-8">
                <SidebarLink 
                href='/dashboard'
                icon={Layout}
                isCollapsed= {isSidebarCollapsed}
                label='Dashboard' />

                <SidebarLink 
                href='/inventory'
                icon={Archive}
                isCollapsed= {isSidebarCollapsed}
                label='Inventory' />

                <SidebarLink 
                href='/products'
                icon={Clipboard}
                isCollapsed= {isSidebarCollapsed}
                label='Products' />

                <SidebarLink 
                href='/users'
                icon={Users}
                isCollapsed= {isSidebarCollapsed}
                label='Users' />

                <SidebarLink 
                href='/settings'
                icon={Settings2}
                isCollapsed= {isSidebarCollapsed}
                label='Settings' />

                <SidebarLink 
                href='/expenses'
                icon={CircleDollarSign}
                isCollapsed= {isSidebarCollapsed}
                label='Expenses' />
            </div>

            {/* Footer */}
            <footer className={`${isSidebarCollapsed ? "hidden" : "block"}`}>
                <p className="text-center text-xs text-gray-500">&copy; 2025 Tech Nest</p>

            </footer>
        </section>
    )
}

export default SideBar