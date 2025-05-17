'use client'

import React, { useEffect } from 'react'
import NavBar from '../(components)/NavBar';
import SideBar from '../(components)/SideBar';
import StoreProvider, { useAppSelector } from '../redux';

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed)
  const isDarkModeOn = useAppSelector((state)=> state.global.isDarkMode)

  useEffect(()=>{
    if (isDarkModeOn) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  })

  return (
    <div className={`${isDarkModeOn  ? "dark" : "light" } flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
       <SideBar/>
        <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${isSidebarCollapsed ? 'md:pl-24' : 'md:pl-72'}
         `}>
          <NavBar/>
        {children}
        </main>
    </div>
  )
}

const DashboardWrapper = ({children}:{children:React.ReactNode}) => {
  return (
   <StoreProvider>
   <DashboardLayout>
     {children}
    </DashboardLayout>
   </StoreProvider>
  )
}

export default DashboardWrapper;