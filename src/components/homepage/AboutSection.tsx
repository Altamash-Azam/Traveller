import React from 'react'

const AboutSection = () => {
  return (
    <div id='about' className='lg:mx-20 mx-4 my-24'>
      <div className='font-medium text-xl text-[#259ada] mb-5'>//ABOUT US</div>
      <div className='flex flex-col gap-16 lg:gap-0 lg:flex-row'>
        <div className='lg:w-1/2 text-4xl font-light'><span>We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.</span> <span className='text-gray-400'>Our mission is to provide you with best travel experience.</span> </div>
        <div className='mx-auto flex flex-row items-end'>
          <div className='flex lg:flex-row flex-col mx-auto lg:mx-0 items-center justify-center gap-14 lg:gap-7 pb-7'>
            <div className='mx-auto lg:mx-0'>
              <div className='font-bold text-center lg:text-left text-5xl mb-2'>200+</div>
              <div className='text-center lg:text-left'>happy customers</div>
            </div>
            <div className='bg-gray-500/50 h-10 w-[2px] hidden lg:block'></div>
            <div className='mx-auto lg:mx-0'>
              <div className='font-bold text-center lg:text-left text-5xl mb-2'>65+</div>
              <div className='text-center lg:text-left'>Top Hotels</div>
            </div>
            <div className='bg-gray-500/50 h-10 w-[2px] hidden lg:block'></div>
            <div className='mx-auto lg:mx-0'>
              <div className='font-bold text-center lg:text-left text-5xl mb-2'>250+</div>
              <div className='text-center lg:text-left'>Expert Guide</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
