import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import React from 'react'
import { RiCoupon3Line } from "react-icons/ri";

const Page = () => {
  return (
    <div className=' min-w[100vw] h-[150vh]  text-black bg-white relative overflow-hidden'>
      <Sidebar />
      <Header />
      <div className='pt-25 pl-[95px]'>
        <div className='px-7 pt-12 flex flex-row justify-between'>
          <div className='gap-2 flex flex-col'>
            <h1 className='text-3xl font-semibold'>Good Morning, Altamash!</h1>
            <p className='text-gray-600'>Welcome back to adventure of a lifetime</p>
          </div>
          <div className='flex flex-row gap-3 px-4 items-center h-12 border-green-800 border-2 rounded-full mt-3'>
            <div><RiCoupon3Line className='text-green-800 text-xl py-0'/></div>
            <div className='text-lg font-medium text-green-800 py-0'>Get promo</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
