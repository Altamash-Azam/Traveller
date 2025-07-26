import React from 'react'
import { SlSocialInstagram } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#1b1b1b] text-gray-300 flex flex-col justify-center py-10'>
      <div className='flex flex-col md:flex-row  justify-between py-10 px-20'>
        <div className='w-1/2 flex flex-col gap-7 '>
            <h1 className='text-4xl'>traveller</h1>
            <p className='w-2/3'>Experience the ease of planning a journey solely made for you with the help of our expert community and grow as a traveller.</p>
            <div  className='flex flex-row gap-2'>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter/></a>
                    <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp/></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><SlSocialInstagram /></a>
            </div>
        </div>

        <div className='grid grid-cols-3 w-1/2 gap-5 items-end text-start'>
            <div className='text-lg'>Company</div>
            <div className='text-lg'>Support</div>
            <div className='text-lg'>More</div>
            <div className='text-lg'>About</div>
            <div className='text-lg'>FAQs</div>
            <div className='text-lg'>Become Member</div>
            <div className='text-lg'>Blog</div>
            <div className='text-lg'>Support Center</div>
            <div className='text-lg'>Events</div>
            <div className='text-lg'>Contact</div>
            <div className='text-lg'>Security</div>
            <div className='text-lg'>Terms & Conditions</div>
            <div className='text-lg'>Career</div>
        </div>
      </div>
      <div className='h-0.5 mx-auto w-[90%] bg-gray-400'/>
      <div>
        <p className='px-20 mt-10 text-lg mb-2'>© traveller 2025. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
