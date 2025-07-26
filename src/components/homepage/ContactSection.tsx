import React from 'react'

const ContactSection = () => {
  return (
    <div>
      <div className='min-w[95vw] h-[90vh] mx-3 text-white bg-transparent my-40 rounded-2xl relative overflow-hidden'>
        <div className='w-full h-full overflow-hidden absolute inset-0'>
          <img className=' object-cover w-full h-full' src="assets/background.jpg" alt="" />
          <div className="absolute inset-0 bg-[rgba(16,16,17,0.2)] "></div>
          <div className="absolute top-0 left-0 w-full z-10">
            <h1 className='text-7xl text-center px-15 mt-30'>Don't wait any longer! Start your adventure and explore new experiences today</h1>
            <div className="flex flex-row w-fit gap-7 border-2 border-white bg-gray-900/20 backdrop-blur-xs bg-opacity-0 py-3 px-2 rounded-full mx-auto mt-16 items-center">
            <input
              name='email'
              className='text-white w-70 border-0 focus:outline-none focus:ring-0 ml-5'
              type="text"
              placeholder='Drop your email here...'
            />
            <div
              className="h-7 w-[2px] bg-white"
            />
            <button className='text-black bg-white rounded-full px-7 py-2'>Subscribe</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
