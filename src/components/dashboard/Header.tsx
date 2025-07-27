import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineTune } from "react-icons/md";
import { IoNotificationsOutline, IoChatboxEllipsesOutline } from "react-icons/io5";
import Image from 'next/image';


const Header = () => {
    return (
        <div style={{ width: 'calc(100% - 95px)' }} className='fixed top-0 right-0 z-50 h-20 text-black bg-white border-y-2 border-gray-200 p-8 py-12 flex justify-between items-center'>
            <div className='w-1/2 flex flex-row items-center gap-4'>
                <div className='w-[75%] text-black border-2 rounded-full border-gray-300 py-2 px-4  flex items-center flex-row'>
                    <CiSearch className='text-gray-700 text-2xl  mt-1' />
                    <input className='px-4 w-full outline-0 placeholder:font-medium' type="text" placeholder='Search' />
                </div>
                <div className='p-2 border-2 border-gray-300 rounded-full'>
                    <MdOutlineTune className='text-gray-700 text-2xl'/>
                </div>
            </div>

            <div className='flex flex-row gap-5 items-center'>
                <div className='flex flex-row gap-4'>
                    <div className='p-2 border-2 border-gray-300 rounded-full'><IoChatboxEllipsesOutline className='text-gray-700 text-xl'/></div>
                    <div className='p-2 border-2 border-gray-300 rounded-full'><IoNotificationsOutline className='text-gray-700 text-xl'/></div>
                </div>

                <div className='h-10 w-0.5 bg-gray-200' />

                <div className='flex flex-row items-center gap-3'>
                    <div className='relative'>
                        <Image className='rounded-full'  src="/assets/me.jpg" alt='pfp' height={40} width={40}></Image>
                        <div className='absolute w-3 h-3 bottom-0 right-0 bg-white rounded-full'></div>
                        <div className='absolute w-2 h-2 bg-green-700 rounded-full right-0.5 bottom-0.5'></div>
                    </div>
                    <div className='flex flex-col pr-3'>
                        <div className='font-medium text-sm'>Altamash Azam</div>
                        <div className='text-xs'>New Delhi, India</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
