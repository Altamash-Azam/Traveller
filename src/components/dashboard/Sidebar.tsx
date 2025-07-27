import React from 'react'
import {  IoGridOutline, IoBookmarkOutline, IoVideocamOutline, IoChatboxEllipsesOutline, IoHeartOutline,IoSettingsOutline,IoHelpCircleOutline, IoExitOutline } from "react-icons/io5";

const Sidebar = () => {
    return (
        <div className='min-h-screen w-[95px] hidden justify-between flex-col lg:flex transition duration-1000 ease-in-out fixed bg-[#fafafa] border-r-2 border-gray-200 text-black p-5'>
            <div className='flex flex-col items-center gap-10'>
                <div className='text-5xl'>t</div>
                <div className='flex flex-col items-center gap-6'>
                    <div className='text-2xl text-green-800'><IoGridOutline /></div>
                    <div className='text-2xl text-green-800'><IoVideocamOutline/></div>
                    <div className='text-2xl text-green-800'><IoChatboxEllipsesOutline/></div>
                    <div className='text-2xl text-green-800'><IoHeartOutline/></div>
                    <div className='text-2xl text-green-800'><IoBookmarkOutline/></div>
                </div>
            </div>

            <div className='flex flex-col items-center gap-5'>
                <div className='text-2xl text-green-800'><IoSettingsOutline/></div>
                <div className='text-2xl text-green-800'><IoHelpCircleOutline/></div>
                <div className='text-2xl text-green-800'><IoExitOutline/></div>
            </div>
        </div>
    )
}

export default Sidebar
