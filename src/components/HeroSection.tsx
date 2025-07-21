"use client"
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react';

const HeroSection = () => {
  const {data: session, status} = useSession();
  return (
    <div className="min-w-[95vw] m-3 h-[97vh] rounded-lg overflow-hidden relative text-white">
      <div className="w-full h-full absolute inset-0 overflow-hidden">
        <img className="w-full h-full object-cover" src="assets/homepage1.jpg" alt="" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]"></div>
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
          <h1 className='text-7xl text-center px-40 mt-24'>Bring your dream journey with our expert support and packages</h1>
          {session && <h2 className='text-center font-3xl mt-10'>welcome, {session.user?.username}</h2>}
          <div className="flex w-1/2 h-5 bg-gray-700 mx-auto mt-16"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
