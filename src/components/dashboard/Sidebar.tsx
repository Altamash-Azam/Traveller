import React from 'react'

const Sidebar = () => {
    return (
        <div className='min-h-screen w-[95px] hidden justify-between flex-col lg:flex transition duration-1000 ease-in-out fixed bg-[#fafafa] border-r-2 border-gray-200 text-black p-5'>
            <div className='flex flex-col items-center gap-10'>
                <div className='text-5xl'>T</div>
                <div className='flex flex-col items-center gap-5'>
                    <div className='text-4xl'>a</div>
                    <div className='text-4xl'>a</div>
                    <div className='text-4xl'>a</div>
                    <div className='text-4xl'>a</div>
                </div>
            </div>

            <div className='flex flex-col items-center gap-5'>
                <div className='text-4xl'>Q</div>
                <div className='text-4xl'>Q</div>
                <div className='text-4xl'>Q</div>
            </div>
        </div>
    )
}

export default Sidebar
