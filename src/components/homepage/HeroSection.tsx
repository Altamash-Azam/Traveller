"use client"
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react';


const HeroSection = () => {
  const { data: session, status } = useSession();
  return (
    <div className={` min-w-[95vw] m-3 h-[140vh] rounded-2xl overflow-hidden relative  text-white`}>
      <div className="w-full h-full absolute inset-0 overflow-hidden">
        <img className="w-full h-full object-cover" src="assets/homepage1.jpg" alt="" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] "></div>
        <div className="absolute top-0 left-0 w-full z-10">
          <Navbar />
          <h1 className='text-6xl text-center px-40 mt-30'>Bring your dream journey to life with our expert community</h1>
          {session && <h2 className='text-center font-3xl mt-10'>welcome, {session.user?.username}</h2>}
          <div className="flex flex-row w-fit gap-7 bg-gray-900/20 backdrop-blur-xs bg-opacity-0 py-2 px-2 rounded-full mx-auto mt-16 items-center">
            <input
              name='destination'
              className='text-white w-70 border-0 focus:outline-none focus:ring-0 ml-5'
              type="text"
              placeholder='Search Destination'
            />
            <div
              className="h-7 w-[2px] bg-white/20"
            />
            <button className='text-black bg-white rounded-full px-7 py-1'>Explore</button>
          </div>
        </div>
          <div className="absolute bottom-15 lg:mt-70 mx-[5%] w-[90%]">
            <div className='flex flex-row justify-center items-center gap-2 border-white border-2 w-fit px-4 py-2 rounded-full mb-3'> <img className='invert h-4' src="assets/location.png" alt="" /> Bali, Indonesia</div>
            <div className='flex flex-row justify-between'>
              <div className={` text-2xl w-1/2`}>create your own travel itinerary to travel without hassle and explore new places with ease</div>
              <div className='text-xl border-white border-2 px-6 h-2/3 py-2 rounded-full backdrop-blur-xs'>Explore More</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HeroSection
